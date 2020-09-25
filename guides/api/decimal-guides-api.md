Decimal Guides Api is one paticular Api Library of Decimal Developement whereas it contains more api libraries and you can view docs for it [here](https://decimaldev.xyz/guides/decimal-api)

---

## Getting Paticular Guide

---

**GET:**

```
/guides/:guideName/?json=1
```

**Parameters:**


Guide name is the only parameter in the link. Setting the query parameter **json** as 1 will return you in json form!


**JSON Response:**


| Name         | Description               |
|:-------------|:--------------------------|
| message      | Only if invalid guide     |
| name         | Name of guide             |
| description  | Description of guide      |
| content      | Content of guide in MD    |

---

## Getting array of guides by query

---

**GET:**

```
/guides?query=query&json=1
```

**Parameters:**

As in start setting the query parameter **json** to 1 will return as json form and query parameter **query** which will be your query where the system will search for those article name to be included or starts with it and will retunr u array form

**JSON Response:**

> In array of objects

| Name         | Description               |
|:-------------|:--------------------------|
| name         | Name of guide             |
| description  | Description of guide      |
| content      | Content of guide in MD    |

---

## Getting all guides in array form

---

**GET:**

```
/guides?query=all&json=1
```

**Parameters:**

Setting **json** to 1 means you are calling an api and setting `all` for `query` means it will return an array of all guides by Decimal Developement!

**JSON Response:**

> In array of objects

| Name         | Description               |
|:-------------|:--------------------------|
| name         | Name of guide             |
| description  | Description of guide      |
| content      | Content of guide in MD    |

---

You can update this guide by doing a pull request [here](https://github.com/Scientific-Guy/decimaldev/blob/master/guides/api/decimal-guides-api.md)
