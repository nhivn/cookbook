## A recipe has

- `title`: Self-explanatory
- `date`: Date the recipe is added or modified
- `credit`: Most of the recipes here are found somewhere on the internet
  - `name`: The original poster's name
  - `image` (optional): URL of their profile picture
  - `url`: URL of the original post
- `ingredients`: Self-explanatory
- `steps`: Cooking instruction
- `note` (optional): Anything the reader need to be mindful about when cooking the recipe
- `tips` (optional): Self-explanatory

## Template

```
title: Lorem ipsum dolor sit amet
date: YYYY-MM-DD
credit:
  name: Lorem Ipsum
  image: https://placekitten.com/640/360
  url: https://google.com
ingredients:
  - lorem
  - ipsum
steps:
  - "Lorem ipsum dolor sit amet
  <ul>
  <li>consectetur adipiscing elit</li>
  <li>sed do eiusmod tempor incididunt</li>
  </ul>
  "
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```
