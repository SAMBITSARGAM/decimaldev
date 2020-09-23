So yes, welcome to a new guide of Decimal Developement...

**Q. What is QuickMongo.py?**

**A.** Quickmongo.py is a quickwrapper for Pymongo written in python which is actually same speed as PyMongo...

**Q. Does Quickmongo.py has all functions?**

**A.** Well sorry but this does not has all functions which Pymongo has but it has enough functions to work on such as setting my own collection, getting all data, getting paticular data or setting a data and many more. You can read the docs from its homepage of PyPi [here](https://pypi.org/project/quickmongo.py/)

**Q. Can we set Custom Schema in Quickmongo.py?**

**A.** Well again sorry but you cannot store in custom schema and will store in form of `{key: key, value: value}`

**Q. Can i make changes to Quickmongo.py?**

**A.** Yeah ofcourse, you can do a pull request in our GitHub Repo [here](https://github.com/Scientific-Guy/quickmongo.py)

---

## Installation

This is ofcourse that you need to install that pypi package before using it!

```
pip install quickmongo.py
```

---

## Setting up database

Set your database by doing the following

```py
from quickmongo import Database

db = Database(
  mongoURL="ur mongo uri here"
)
```

Incase if the system chose the wrong database, you can set your selected database in options and if the database is invalid, it will throw a TypeError showing available databases. Set your custom database by selecting below and remember that if you are using localhost then you need to set it to local by the following

```py
from quickmongo import Database

db = Database(
  mongoURL="ur mongo uri here",
  options={
    'db_name': 'local' # Or some other database unless if its localhost
)
```

Well now lets come to the collection topic. Quickmongo.py will create a default collection with the name of `python` if you did not selected one in options

```py
from quickmongo import Database

db = Database(
  mongoURL="ur mongo uri here",
  options={
    'db_name': 'local', # Or some other database unless if its localhost,
    'collection_name': 'someCollectionName'
)
```

Now you have learnt to set database with Quickmongo.py and it will raise error if its invalid mongo uri...
