# Travel Journal (React Solo Project Solution)

This is my solution to the [React Travel Journal Solo Project](https://scrimba.com/learn/learnreact/react-section-2-solo-project-co74f46f2b22693c5ea577559) on Scrimba. The solo projects are part of the [Scrimba Platform's Courses](https://scrimba.com/allcourses).

### The challenge

- Data array in a seperate .js file
  - Title
  - Location
  - Google Maps
  - Start Date
  - End Date
  - Description
  - Image URL
- Create a card component for each card
- Pass props to each component
- Style and polish the app as in the Figma design

### Screenshot

![Travel Journal](https://user-images.githubusercontent.com/84665360/145719487-483f07ca-bad8-468c-86cb-62899af4f113.png)

### Links

- [Live Solution 2021](https://zaidmarrie.github.io/travel-journal/)
- [Live Solution 2022](https://zaids-travel-journal.netlify.app/)
- [Source Code](https://github.com/ZaidMarrie/travel-journal-solo-project)

## My Process

### Built with

- HTML
- CSS
- JavaScript
- React (create-react-app)

### What I learned

I learned and practiced the following concepts:

- React Props
- Conditional Rendering
- Rendering a collection of elements with `Array.map()` method

**A snippet of the code I used**

```javascript
import Card from "./Card";
import journalData from "../journalData";

function Cards() {
	return (
		<main className="container">
			{journalData.map((dataEntry) => {
				return <Card key={dataEntry.id} {...dataEntry} />;
			})}
		</main>
	);
}

export default Cards;
```

## Author

- Github - [@ZaidMarrie](https://github.com/ZaidMarrie)
- Twitter - [@LeKoels27](https://twitter.com/LeKoels27)

## Contributing

Pull requests are very welcome and you may freely fork this repository.

## Supporting Scrimba

Since 2017, scrimba has created over 20 free courses and continue's launching free courses. If you perhaps are interested in learning or maybe just would like to up your skills try out their courses at [scrimba.com](www.scrimba.com).

- [Become a professional React developer](https://scrimba.com/course/greact)
- [The Responsive Web Design Bootcamp](https://scrimba.com/course/gresponsive)
- [The Ultimate JavaScript Bootcamp](https://scrimba.com/course/gjavascript)

Happy Coding!

## License

[MIT](https://choosealicense.com/licenses/mit/)
