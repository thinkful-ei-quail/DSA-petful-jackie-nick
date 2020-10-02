import React, { Component } from "react";
import Users from "../Users/Users"
import Adopt from "../Adopt/Adopt"
import petsApiService from "../Services/pets-service";
import usersApiService from "../Services/users-service";

export default class AdoptionPage extends Component {
  state = {
    cats: {},
    dogs: {},
    pets: [],
    users: [],
    user: {},
    error: {},
  };

  componentDidMount() {
    petsApiService
      .getPets()
      .then((res) => {
        this.setState({
          cats: res.cats,
          dogs: res.dogs
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
      this.updateUser();
    }, 5000);
  }

  updateUser() {
    usersApiService.updateUsers().then((res) => {
      this.setState({
        users: res,
        user: res[0].name,
      });
    });
  }
  deletePet = () => {
    petsApiService.deletePets();
    let updatedPets = [...this.state.pets];
    updatedPets.shift();
    this.updateUser();
    this.setState({
      pets: updatedPets,
    });
  };

  render() {
    const { cats, dogs, users, user, error } = this.state;
    console.log(cats)
    if (0 === 0) {
      return (
        <div>
          <section>
            <Users users={users} />
          </section>

          <div>
            <section>
              <h2>Dogs</h2>
              <Adopt
                dogs={dogs}
                adopt={this.deletePet}
                user={user}
                error={error}
              />
            </section>

            <section>
              <h2>Cats</h2>
              <Adopt
                cats={cats}
                adopt={this.deletePet}
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
