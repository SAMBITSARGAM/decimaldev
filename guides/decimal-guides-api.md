## GET

---
```
/articles/:articleName/?json=1
```

---

### Parameters

---
| Name        | Type    | Description     |
|:------------|:--------|:----------------|
| articleName |  string | Name of article |

---

### JSON Response

---
| Name         | Description               |
|:-------------|:--------------------------|
| message      | Only if invalid article   |
| name         | Name of article           |
| description  | Description of Article    |
| content      | Content of Article in MD  |
