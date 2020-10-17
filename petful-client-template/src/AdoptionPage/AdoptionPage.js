import React, { Component } from "react";
import Users from "../Users/Users";
import Adopt from "../Adopt/Adopt";
import petsApiService from "../Services/pets-service";
import usersApiService from "../Services/users-service";

export default class AdoptionPage extends Component {
  state = {
    cats: [],
    dogs: [],
    pets: [],
    users: [],
    currentUser: "",
    nextInLine: "",
    error: {},
  };

  componentDidMount() {
    petsApiService
      .getPets()
      .then((res) => {
        this.setState({
          cats: res.cats,
          dogs: res.dogs,
        });
      })
      .catch((res) => this.setState({ error: res.message }));

    usersApiService.getUsers().then((res) => {
      this.setState({
        users: res,
        user: res.person,
      });
    });

    this.interval = setInterval(() => {
      this.handleInterval();
    }, 5000);
  }
  updateUser() {
    usersApiService.postUsers().then((res) => {
      this.setState({
        users: res,
        user: res[0].name,
      });
    });
  }
  deleteDog = () => {
    petsApiService.deleteDog();
    let updatedDogs = [...this.state.dogs];
    updatedDogs.shift();
    this.updateUser();
    this.setState({
      dogs: updatedDogs,
    });
  };
  deleteCat = () => {
    petsApiService.deleteCat();
    let updatedCats = [...this.state.cats];
    updatedCats.shift();
    this.updateUser();
    this.setState({
      cats: updatedCats,
    });
  };
  adoptDog = (option) => {
    if (option === "both") {
      this.adoptPet("both");
    } else {
      this.adoptPet("dogs");
    }
  };

  adoptCat = (option) => {
    if (option === "both") {
      this.adoptPet("both");
    } else {
      this.adoptPet("cats");
    }
  };
  handleAddPerson = (e) => {
    e.preventDefault();
    const { name } = e.target;
    usersApiService.postUsers(name.value).then((res) => {
      console.log(res);
      this.setState({
        currentUser: name.value,
      });
    });
    console.log(this.state.currentUser);
  };
  handleInterval() {
    const users = this.state.users;
    const cats = this.state.cats;
    const dogs = this.state.dogs;

    const currentUser = this.state.currentUser;
    let nextInLine = this.state.nextInLine;

    if (nextInLine === currentUser) {
      if (users.length < 4) {
        const random = [
          "Cheddar Bob",
          "Billy Bob",
          "Bobcat Goldthwait",
          "Uncle Bob",
          "What about Bob",
        ];
        let randomPerson = random[Math.floor(Math.random() * 4)];
        usersApiService.postUsers(randomPerson).then(() => {
          users.push(randomPerson);
          this.setState({ users: users });
        });
      }
    } else if (users.length > 0) {
      const petType = users.length % 2 === 0 ? "cats" : "dogs";
      petsApiService.deletePet(petType).then(() => {
        if (petType === "cats") {
          cats.shift();
        } else {
          dogs.shift();
        }
        users.shift();

        this.setState({
          users: users,
          cats: cats,
          dogs: dogs,
          nextInLine: users[0],
        });
      });
    }
  }
  render() {
    const { cats, dogs, users, user, error } = this.state;
    console.log(this.state.people);
    if (cats) {
      return (
        <div>
          <section>
            <Users users={users} />
          </section>
          <form className="nameForm" onSubmit={this.handleAddPerson}>
            <label htmlFor="adoptForm">Name</label>
            <input name="name" type="text" />
            <button type="submit">Get In Line</button>
          </form>

          <div>
            <section>
              <h2>Dogs</h2>
              <Adopt
                dogs={dogs}
                adopt={this.deleteDog}
                adopt={this.adoptDog}
                user={user}
                error={error}
              />
            </section>

            <section>
              <h2>Cats</h2>
              <Adopt
                cats={cats}
                adopt={this.deleteCat}
                adopt={this.adoptCat}
                user={user}
                error={error}
              />
            </section>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
