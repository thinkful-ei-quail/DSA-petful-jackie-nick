import React, { Component } from "react";
import Users from "../Users/Users"
import Adopt from "../Adopt/Adopt"
import petsApiService from "../Services/pets-service";
import usersApiService from "../Services/users-service";

export default class AdoptionPage extends Component {
  state = {
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
          pets: res,
        });
      })
      .catch((res) => this.setState({ error: res.message }));

    usersApiService.getUsers().then((res) => {
      this.setState({
        users: res,
        user: res[0].name,
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
    let updatedPets = [...this.state.Pets];
    updatedPets.shift();
    this.updateUser();
    this.setState({
      pets: updatedPets,
    });
  };

  render() {
    const { pets, users, user, error } = this.state;
    if (pets !== null) {
      return (
        <div>
          <section>
            <Users users={users} />
          </section>

          <div>
            <section>
              <h2>Dogs</h2>
              <Adopt
                pets={pets}
                adopt={this.deletePet}
                user={user}
                error={error}
              />
            </section>

            <section>
              <h2>Cats</h2>
              <Adopt
                pets={pets}
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
