import mysql.connector
import logging
from mysql.connector import errorcode
from config import data

host, user, password = data["host"], data["user"], data["passwd"]
DB_NAME = 'task_management_system'


def connect_to_mysql_database(db_name):
    """
    Connects to a MySQL database using credentials from a JSON file.
    Returns:
        mysql.connector.MySQLConnection: A MySQL database connection object.
    Raises:
        mysql.connector.Error: If there is an error during the database connection process.
    """
    try:
        db_connection = mysql.connector.connect(
            host=host,
            user=user,
            passwd=password,
            auth_plugin='mysql_native_password',
            database=db_name
        )
        return db_connection
    except mysql.connector.Error as e:
        print(f"Error connecting to MySQL database: {e}")
        raise e
    except ValueError as e:
        print(f"ValueError: {e}")
        raise e
    except Exception as e:
        # Catch unexpected exceptions, log them, and raise to crash the program
        logging.exception(f"Unexpected error occurred: {e}")
        raise e


def get_cursor_and_connection(db_name):
    db_connection = connect_to_mysql_database(db_name)
    cursor = db_connection.cursor()
    return cursor, db_connection


def create_database(db_name):
    try:
        cursor, _ = get_cursor_and_connection(db_name)
        cursor.execute(
            "CREATE DATABASE {} DEFAULT CHARACTER SET 'utf8'".format(db_name))
    except mysql.connector.Error as err:
        print("Failed creating database: {}".format(err))
        exit(1)


def connect_to_database_or_create_if_not_exists(db_name):
    try:
        cursor, db_connection = get_cursor_and_connection(db_name)
        cursor.execute("USE {}".format(db_name))
    except mysql.connector.Error as err:
        print("Database {} does not exists.".format(db_name))
        if err.errno == errorcode.ER_BAD_DB_ERROR:
            create_database(db_name)
            print("Database {} created successfully.".format(db_name))
            db_connection.database = db_name
        else:
            print(err)
            exit(1)
    print(f"You are using {db_name} database.")


connect_to_database_or_create_if_not_exists(DB_NAME)
def delete_task():
    delete = input('Would you like to delete a task? y/n ')
    if delete == 'y':
        try:
            db_name = 'task_management_system'
            cursor, db_connection = get_cursor_and_connection(db_name)
            print(f"Connected to database {db_name}")

            # Get user input
            task_id = input('Please enter the Task ID of the task you would like to delete: ')
            task_id = int(task_id)  # Convert the input from str to int

            # Query deleting the task with ID provided by the user from the db
            query = """DELETE FROM tasks WHERE TASK_id = '{x}'""".format(x=task_id)
            cursor.execute(query)
            db_connection.commit()

            cursor.close()
            print('Your task has been deleted')

        except Exception as exc:
            print(exc)

        finally:
            if db_connection:
                db_connection.close()



delete_task()
