# Travel Journal
- Created this site for storing all the experiences on has from exploring the world
- Used React JS props to display the data 
- Created my own data on a JS file, that contains all the content displayed in the site
### Here is how the data looks like:
```javascript
const data = [
    {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "./images/mount-fuji.jpg"
    }]
```

## Feature
- A quote generator made possble with the Fetch API 
- Another alternative is using the Axios API to fetch the data
- I understand the fetch API better

## Lessons learnt
- Sending requests to API
- Converting the response to JSON file and accessing it to your site
- Using React hooks like:
```javascript
const [hook, setHook] = React.useState; // use to change states
useEffect(() => { // Runs first before everything
     // Some code
}, [])
```
