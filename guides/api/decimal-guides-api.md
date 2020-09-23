## Getting Paticular Guide

---

**GET:**

```
/guides/:guideName/?json=1
```

---

**Parameters:**

---

Guide name is the only parameter in the link. Setting the query parameter **json** as 1 will return you in json form!

---

**JSON Response:**

---
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
---

**Parameters:**

---
As in start setting the query parameter **json** to 1 will return as json form and query parameter **query** which will be your query where the system will search for those article name to be included or starts with it and will retunr u array form

---

**JSON Response:**

---
> In array of objects

| Name         | Description               |
|:-------------|:--------------------------|
| name         | Name of guide             |
| description  | Description of guide      |
| content      | Content of guide in MD    |

---
