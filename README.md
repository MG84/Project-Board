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

Use the sprints.json file (sprint/sprints/sprint.json) to add a Sprint
to your project Board

```json
[
  {
    "id": "1",
    "goal": "<Sprint Goal>",
    "estimation": "<Estimation_MD>",
    "start": "08/02/2016",
    "end": "18/02/2016",
    "demo": "18/02/2016"
  },
  ...
]
```
Create a Sprint folder inside sprint/sprints (i.e. sprint/sprints/sprintN, where
N is the sprint number) with two files:
- sprint_N.json (where N is the sprint number)
- stories.json

sprint_N.json
This file contains the information of the sprint you've just added in
the sprint.json file.
```json
{
  "id": "1",
  "goal": "<Sprint Goal>",
  "estimation": "<Estimation_MD>",
  "start": "08/02/2016",
  "end": "18/02/2016",
  "demo": "18/02/2016"
}
```

stories.json
This file contains all the stories you have planned to work on during the sprint
```json
[
  {
    "id": "1",
    "name": "Story name",
    "category": "Category name (DEV, BIZ DEV, TEAM...)",
    "importance": "In a range from 0 to 100",
    "estimation": "Estimation in MD",
    "demo": "What are you going to show at the demo for this story",
    "notes": "additional notes, if any",
    "links": "important links, if any",
    "assigned": "Member and MD, Member and MD"
  },
  ...
]
```


## Special Thanks

I'd like to thank Babaiola's Team for having created the very first version of the board from which I based this project.
