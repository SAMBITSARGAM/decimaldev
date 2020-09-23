So yes, welcome to a new guide of Decimal Developement...

## Links

---

- [GitHub Source](https://github.com/Scientific-Guy/quickmongo.py)
- [PyPi](https://pypi.org/project/quickmongo.py/)

---

## Questions

---

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

---

This is ofcourse that you need to install that pypi package before using it!

```
pip install quickmongo.py
```

---

## Setting up database

---

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

---

## Basic Operations

---

Quickmongo.py works like dict in python or map in javascript

#### 1. Set value for a key
```py
db.set('foo', 'bar')
```

`foo` will be the key and `bar` will be the data which is stored for that key!

#### 2. Get the stored value for the key
```py
db.get('foo')
```

`foo` will be the key. It will return `bar` as we have set a value for it previously or else it will return NoneType

#### 3. Get typeof the value by key
```py
db.typeof('foo')
```

`foo` will be the key. It will return the type(value) of the key. For example previously we set `bar` for it which is a string so it will return `<class 'str'>` or NoneType if no value

#### 4. Get all data
```py
db.all()
```

This will return a big array of `{'key': key, 'value': value}` dict of all datas and you can customize it by using `startsWith()` which will return the data's whose key startswith the search parameter which is `f` in given below example

```py
db.startsWith('f')
```

#### 5. Deleting Data
```py
db.deleteAll()
```

This is something similar to drop() which will clear whole data of collection but if you want to delete only one key use `delete()` method in which `foo` is the key and there would be no value for that key

```py
db.delete('foo')
```

#### 6. Adding and Subtracting

Now to use `add()` and `subtract()` method then the old value ust be an int so i will be setting it to int

```py
db.set('foo', 1)
```

Now lets add

```py
db.add('foo', 1)
```

Now 1 is the amount and `foo` is the key as always and now the value for the `foo` is 1+1 = 2 and `subtract()` is as same to `add()`

```py
db.subtract('foo', 2)
```

Now the value for `foo` is 2-2 = 0

---

## At the end

---

Woo! You have finished learning Quickmongo.py in some minutes! You can actually update this guide and help others to get correct information by making a pull request [here](https://github.com/Scientific-Guy/decimaldev/blob/master/guides/quickmongopy-crash-course.md)

Thank you! Read some guides and get knowledge below 
