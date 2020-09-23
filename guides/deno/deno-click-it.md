Simple click it website written in Deno Opine. So in this guide i will be making a deno website which has simple click it function!

## Some Links

- [GitHub Source](https://github.com/Scientific-Guy/deno-click-it)
- [Live Example](https://deno-click-it.fact.repl.co/)
- [Discord Support](https://discord.gg/FrduEZd)

---

## Deno Installation

So first you have to install Deno for it! Installation guide for Deno [here](https://deno.land/#installation)

---

## Your workspace

Now lets create a simple workspace

```
deno-click-it-website
   |--index.ts
   |--views
     |--index.html
```

---

## Setting up index.html

Before entering the server file(index.ts) lets start with our index.html. I have already made the html file. You can configure it.

```html
<html>
  <head>
    <title>Simple Deno Site</title>

    <style>
      input[type=button]{
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        font-size: 20px;
      }
    </style>

    <script>
      function addCount(){
        counter = document.getElementById('counter')
        counter.value = parseInt(counter.value) + 1
      }
    </script>
  </head>

  <body>
    <input type="button" onclick="addCount()" id="counter" value="0">
  </body>
</html>
```

---

## Setting up server file(index.ts)

You have to install Opine from deno.land/x/

```ts
import { opine } from "https://deno.land/x/opine@0.21.2/mod.ts";
```

Now as __dirname won't work in deno. It should be something like this or you can make your custom paths

```ts
const __dirname = new URL('.', import.meta.url).pathname;
```

Now setup the app which is actually similar to Javascript's Expressjs

```ts
const app = opine()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.listen({
  port: 1212
})
```

Now you have successfully created a deno click it site! If you think that you can actually make this guide more better you can update it from our GitHub!
