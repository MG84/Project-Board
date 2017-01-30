# Project-Board

## Install

- install jdk (for e2e tests)
- clone
- brew install node
- npm install -g grunt-cli
- npm install express

## Run

- node server

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
    "goal": "Survive the First Sprint",
    "estimation": "12",
    "start": "08/02/2016",
    "end": "22/02/2016",
    "demo": "22/02/2016",
    "stories": [
      {
        "id": "1",
        "name": "Organize and execute 6 guided tours",
        "category": "Operation",
        "description": "Organize and execute 6 guided tours / Organize and execute 6 guided tours",
        "weight": "100",
        "estimation": "4",
        "status": "todo",
        "demo": "Screenshot new booked tours",
        "links": ["http://www.google.com", "http://www.randomurl.com"],
        "members": [
            {
                "name": "Mario",
                "manDays": "3"
            },
            {
                "name": "Luigi",
                "manDays": "1"
            }
        ]
      },
      {
        "id": "2",
        "name": "Pivoting",
        "category": "Operation",
        "description": "Pivoting Pivoting Pivoting Pivoting Pivoting Pivoting Pivoting Pivoting",
        "weight": "100",
        "estimation": "5",
        "status": "doing",
        "demo": "Screenshot of Pivoting",
        "links": ["http://www.google.com", "http://www.randomurl.com"],
        "members": [
            {
                "name": "Mario",
                "manDays": "3"
            },
            {
                "name": "Luigi",
                "manDays": "2"
            }
        ]
      },
      {
        "id": "3",
        "name": "Increase by 60% the returning user",
        "category": "BIZ DEV",
        "description": "Increase by 60% the returning user / Increase by 60% the returning user ",
        "weight": "80",
        "estimation": "3",
        "status": "done",
        "demo": "Show Data",
        "links": ["http://www.google.com", "http://www.randomurl.com"],
        "members":[
            {
                "name": "Luigi",
                "manDays": "3"
            }
        ]
      }
    ]
  }
]
```

## Notes

Proudly inspired by Babaiola's project board.