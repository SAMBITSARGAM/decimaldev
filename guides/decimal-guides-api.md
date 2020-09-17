## GET

---
```
/guides/:guideName/?json=1
```

---

### Parameters

---
| Name        | Type    | Description     |
|:------------|:--------|:----------------|
| guideName   |  string | Name of guide   |

---

### JSON Response

---
| Name         | Description               |
|:-------------|:--------------------------|
| message      | Only if invalid guide     |
| name         | Name of guide             |
| description  | Description of guide      |
| content      | Content of guide   in MD  |
