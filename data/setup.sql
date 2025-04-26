CREATE TABLE IF NOT EXISTS branches (  
  id INTEGER PRIMARY KEY AUTOINCREMENT,  
  branchCode TEXT NOT NULL,  
  branchName TEXT NOT NULL,  
  branchCity TEXT NOT NULL,  
  branchState TEXT NOT NULL,  
  latitude REAL,  
  longitude REAL  
);  