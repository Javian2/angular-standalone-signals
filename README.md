# Angular - Standalone and Signals

## Project description

This project consists of a kind of demo in order to make use of some of the new features of the latest versions of Angular: standalone components and signals. 

The project has been created standalone by default and its structure is composed by two main components: one standalone and one not standalone. These two components have been created differently to incorporate Lazy Loading and observe the differences in the configuration. 

There are only two pages: 

- The main one only contains a redirect to the other page, with the peculiarity that the link is rendered in a child component. This has been done to test the new "required" in the Inputs. 
- The second one initially contains a counter made by Signals, using a Writable Signal, a Computed Signal and an Effect. Further down, via a service, an external api has been called to obtain data on different characters. The functionality of changing the characters is also done through Signals by means of an Effect that calls back to the api with the next page number, this page being a Writable Signal. 

## Technologies used

- Angular 16
- Typescript
- Sass
- Tailwindcss





