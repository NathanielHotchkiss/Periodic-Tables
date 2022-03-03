# Restaurant Reservation System

> You have been hired as a full stack developer at _Periodic Tables_, a startup that is creating a reservation system for fine dining restaurants.
> The software is used only by restaurant personnel when a customer calls to request a reservation.
> At this point, the customers will not access the system online.

## Product Backlog

The Product Manager has already created the user stories for _Periodic Tables_. Each of the user stories is listed below, and your Product Manager wants them to be implemented in the order in which they are listed. Another developer has already written the tests for each of the user stories so that you don't have to.

### US-01 Create and list reservations

As a restaurant manager<br/>
I want to create a new reservation when a customer calls<br/>
so that I know how many customers will arrive at the restaurant on a given day.

### US-02 Create reservation on a future, working date

As a restaurant manager<br/>
I only want to allow reservations to be created on a day when we are open<br/>
so that users do not accidentally create a reservation for days when we are closed.<br/>

### US-03 Create reservation within eligible timeframe

As a restaurant manager<br/>
I only want to allow reservations to be created during business hours, up to 60 minutes before closing<br/>
so that users do not accidentally create a reservation for a time we cannot accommodate.

### US-04 Seat reservation

As a restaurant manager, <br/>
When a customer with an existing reservation arrives at the restaurant<br/>
I want to seat (assign) their reservation to a specific table<br/>
so that I know which tables are occupied and free.

### US-05 Finish an occupied table

As a restaurant manager<br/>
I want to free up an occupied table when the guests leave<br/>
so that I can seat new guests at that table.<br/>

### US-06 Reservation Status

As a restaurant manager<br/>
I want a reservation to have a status of either booked, seated, or finished<br/>
so that I can see which reservation parties are seated, and finished reservations are hidden from the dashboard.

### US-07 Search for a reservation by phone number

As a restaurant manager<br/>
I want to search for a reservation by phone number (partial or complete)<br/>
so that I can quickly access a customer's reservation when they call about their reservation.<br/>

### US-08 Change an existing reservation

As a restaurant manager<br/>
I want to be able to modify a reservation if a customer calls to change or cancel their reservation<br/>
so that reservations are accurate and current.

## Features
- **Dashboard**: Displays all of the reservations on a given day, lists all tables throughout the restaurant and the current status of a reservation.
- **Create table**: Validates and creates tables within restaurant (perfect for when tables need to be pushed together or moved).
- **Create reservation**: Validates and creates a guest's reservation.
- **Edit reservation**: Modify information for the reservation.
- **Cancel reservation**: A button that allows the user to cancel a reservation.
- **Seat reservation**: A button that allows the user to seat a reservation at any available table.
- **Search reservation**: Search reservations by phone number.

## Technology
- JavaScript
- React
- Bootstrap
- Node.js
- Express.js
- Knex.js
- PostgreSQL

## API Documentation
The table below describes the reservation resource
| Reservations API Available Paths & Methods  | Description                                                             |
| ------------------------------------------- | ----------------------------------------------------------------------- |
| GET `/reservations`                         | Returns all reservations                                                |
| POST `/reservations`                        | Creates a new reservation with a unique `reservation_id`                |
| PUT `/reservations/{reservation_id}`        | Edits a specific reservation for the given `reservation_id`             |
| PUT `/reservations/{reservation_id}/status` | Updates status of a specific reservation for the given `reservation_id` |

The table below describes the tables resource
| Tables API Available Paths & Methods | Description                                                             |
| ------------------------------------ | ----------------------------------------------------------------------- |
| GET `/tables`                        | Returns all tables                                                      |
| POST `/tables`                       | Creates a new table with a unique `table_id`                            |
| PUT `/tables/{table_id}/seat`        | Assigns a reservation to the table by adding the `reservation_id`       |
| DELETE `/tables/{table_id}/seat`     | Updates status of a specific reservation for the given `reservation_id` |

The table below describes the folders in this repository:
| Folder/file path | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `./back-end`     | The backend project, which runs on `localhost:5000` by default.  |
| `./front-end`    | The frontend project, which runs on `localhost:3000` by default. |

## Installation
1. Fork and clone this repository.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.
