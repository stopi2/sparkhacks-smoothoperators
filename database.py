import sqlite3

#
# Main
#
###########################################################
with open("Searches.txt", "r") as file:
    lines = file.readlines()
searches = set()
for line in lines:
    searches.add(line[:-1])
file.close()


table = {}
for search in searches:
    table[search] = 0
for line in lines:
    table[line[:-1]]+= 1


dbConn = sqlite3.connect("searchTabs.db")
dbCursor = dbConn.cursor()
sql = """
    CREATE TABLE IF NOT EXISTS SearchTabs (
        Tab STRING PRIMARY KEY,
        Num_Searches INTEGER NOT NULL
    )
    """
dbCursor.execute(sql)


for key, value in table.items():
    sql = """INSERT INTO SearchTabs (Tab, Num_Searches) VALUES 
             (?, ?)
             ON CONFLICT(Tab) DO UPDATE 
             SET Num_Searches = SearchTabs.Num_Searches + excluded.Num_Searches;
        """
    dbCursor.execute(sql, (key, value))
dbConn.commit()


sql = "Select Tab, Num_Searches From SearchTabs Order By Num_Searches Desc Limit 5;"
dbCursor.execute(sql)
rows = dbCursor.fetchall()
for row in rows:
    print(row)


dbConn.close()
open("Searches.txt", "w").close()
###########################################################