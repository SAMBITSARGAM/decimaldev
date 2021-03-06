Python Nasa Api is a very simple pypi package which gives you access to the NASA Api in an very easy way!

- [PyPi Package Link](https://pypi.org/project/python-nasa-api/)

## Quick Docs

You need NASA's Official API to use this module! 

### Load Client Class

```py
# Import Client Class
from nasaapi import Client

# Load your api
nasa = Client(api)
# Replace your api with the original one!
```

### Apod

```py
print(nasa.apod())
# Will return a dict

print(nasa.apod_image())
# Will retun apod image url
```

### Earth

```py
print(nasa.earth(lat, lon, date))
# Lat Lon parameters should be latitude and longitude
# Date parameter should be in the form of YYYY-MM-DD
# Will return a dict

print(nasa.earth_image(lat, lon, date))
# Will return image url
```

### Insight Weather Data

```py
print(nasa.insight())
# Will return a dict
```

### Data of mars rovers

There are two methods to get this data

**1. Using MarsRovers Class**

```py
from nasaapi import MarsRovers

rovers = MarsRovers(api_key, sols, camera)
# api_key would be your NASA Api key. Sols would be the Mars Days. Camera is the name of camera to view

print(rovers.curiosity()) # Get data of Curiosity Rover
print(rovers.opportunity()) # Get data of Oportunity Rover
print(rovers.spirit()) # Get data of Spirit Rover
```

**2. Using Client Class**

```py
rovers = nasa.mars_rovers(sols, camera)
# Sols would be the Mars Days. Camera is the name of camera to view

print(rovers.curiosity()) # Get data of Curiosity Rover
print(rovers.opportunity()) # Get data of Oportunity Rover
print(rovers.spirit()) # Get data of Spirit Rover
```

### Techport

Get data of nasa's techport

```py
print(nasa.techport(id))
# ID will be the id of the techport project!
# Will return dict unless its a better id
```

### Two Line Element Sets of Nasa

Get data of nasa's tle

```py
print(nasa.tle.search(query))
# Will return data of a search

print(nasa.tle.get(query))
# Will get of 1 data only
```

### NIVL aka Nasa Image and Video Library

Get images, Search Images, and other image and video library of NASA

```py
print(nasa.nivl.search(query))
# Query will be the query you will search

print(nasa.nivl.asset(id))
# Get Asset by ID

print(nasa.nivl.metadata(id))
# Get Metadata by ID

print(nasa.nivl.captions(id))
# Get Captions by ID
```

## Support

- [Discord Support Server](https://discord.gg/FrduEZd)
- [GitHub Repo](https://github.com/Scientific-Guy/python-nasa-api)

If you think you can update this article then sure update it at github by doing a pull request [here](https://github.com/Scientific-Guy/decimaldev/blob/master/guides/python/python-nasa-api.md)
