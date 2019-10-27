import mysql.connector

mydb = mysql.connector.connect(
  #host="db-hackathon.cweudo5c98bn.sa-east-1.rds.amazonaws.com",
  #port=3306,
  #user="hackathon_2",
  #passwd="eXbs7rHDvnQ9QeWt"
  host="localhost",
  user="manuel",
  password="manuel"
)

it = mydb.cursor()
it.execute("USE manuel")
'''
it.execute("DROP DATABASE manuel")
it.execute("CREATE DATABASE manuel")
it.execute("USE manuel")
it.execute("CREATE TABLE pacient (id INT not null AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), CPF VARCHAR(11), RG INT(9))")
it.execute("CREATE TABLE medicine (id INT not null AUTO_INCREMENT primary key, name VARCHAR(255), initial_time time, gap time, pacient_id int)")
it.execute("ALTER TABLE medicine add constraint pacient_id foreign key (pacient_id) references pacient(id)")

values = [("mauricio","12345678915",452378452),("lucas","12341778915",452324452)]

for value in values:
	it.execute("INSERT INTO pacient (name, CPF, RG) VALUES (%s, %s, %s) ", (value[0], value[1], value[2]))

values = [("Omeprazol","22:30","4:00",1), ("Doperidona","12:30","6:00",1), ("Omeprazol","13:30","8:00",1)]

for value in values:
	it.execute("INSERT INTO medicine (name, initial_time, gap, pacient_id) VALUES (%s, %s, %s, %s) ", (value[0], value[1], value[2], value[3]))

mydb.commit()
print(it.rowcount, "record inserted.")

it.execute("SELECT * FROM pacient")
result = it.fetchall()

for ret in result:
	print(ret[3])
'''
def check():
  it.execute("SELECT * FROM medicine")
  result = it.fetchall()

  for ret in result:
  	print("Init: "+str(ret[2])+" Gap: "+str(ret[3]))