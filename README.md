# Project-Board

## Install

- install jdk (for e2e tests)
- clone
- brew install node
- npm install -g grunt-cli

## Run

- npm start

## Tests

### Unit Tests

- npm test

### End 2 End Tests

(with local website running)
- npm run protractor

## Updates

### Tool Dependencies

- npm update

### Angular Dependencies

- bower update


## How it works

### Static Files

To store your static files (images and docs) use the static folder

### Team

To add a team member just add to the team.html file inside the team folder
Use the team.json file to add/edit the team profile
for the social icon please refer to https://fortawesome.github.io/Font-Awesome/cheatsheet/ and set the social name with the name linked to the icon
```json
[
  {
    "name": "Mario Bros",
    "avatar": "static/img/Super_mario.png",
    "role": "CEO",
    "email": "mario.bros@nintendo.com",
    "social": [
      {
        "name": "linkedin",
        "link": "https://it.linkedin.com/pub/fake-mario-bros"
      },
      {
        "name": "twitter",
        "link": "https://twitter.com/fake-super-luigi"
      }
    ]
  },
  {
    "name": "Super Luigi",
    "avatar": "static/img/Luigi.jpg",
    "role": "CTO",
    "email": "super.luigi@nintendo.com",
    "social": [
      {
        "name": "linkedin",
        "link": "https://it.linkedin.com/pub/fake-super-luigi"
      },
      {
        "name": "twitter",
        "link": "https://twitter.com/fake-super-luigi"
      }
    ]
  }
  ...
]

```

#### Resources

Store a resource by adding it to the static folder.
Use the resources.json file to make a resource available on your board.

```json

[
  {
    "name": "Logo",
    "description": "Our amazing logo",
    "url": "static/img/AmazingLogo.png"
  },
  {
    "name": "Demo #1 Presentation",
    "description": "First Demo Presentation",
    "url": "static/img/Demo1.pdf"
  },
  ...
]
```
In resource.html add the links to your social network profiles

### Sprint

Use the sprints.json file (sprint/sprints.json) to add a Sprint
and the related stories to your project Board

```json
[
  {
    "id": "1",
    "goal": "Sprint One Goal",
    "estimation": "10",
    "start": "08/02/2016",
    "end": "22/02/2016",
    "demo": "22/02/2016",
    "stories": [
      {
        "id": "1",
        "name": "Organize and execute 6 guided tours",
        "category": "Operation",
        "importance": "100",
        "estimation": "4",
        "demo": "Screenshot new booked tours",
        "notes": "We have to make those tours more appealing",
        "links": "",
        "assigned": "Mario 3, Luigi 1"
      },
      {
        "id": "2",
        "name": "Increase by 60% the returning user",
        "category": "BIZ DEV",
        "importance": "80",
        "estimation": "3",
        "demo": "Show Data",
        "notes": "Ask Uncle Sam for some useful tips",
        "links": "",
        "assigned": "Luigi 3"
      }
    ]
  },
  ...
]
```

## Special Thanks

I'd like to thank Babaiola's Team for having created the very first version of the board from which I based this project.
