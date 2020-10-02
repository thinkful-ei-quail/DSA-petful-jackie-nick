import React, { Component } from "react";
import Users from "../Users/Users"
import Adopt from "../Adopt/Adopt"
import dogsApiService from "../Services/dogs-service";
import catsApiService from "../Services/cats-service";
import usersApiService from "../Services/users-service";

export default class AdoptionPage extends Component {
  state = {
    cats: [],
    dogs: [],
    users: [],
    user: {},
    error: {},
  };

  componentDidMount() {
    dogsApiService
      .getDogs()
      .then((res) => {
        this.setState({
          dogs: res,
        });
      })
      .catch((res) => {
        this.setState({ error: res.message });
      });
    catsApiService
      .getCats()
      .then((res) => {
        this.setState({
          cats: res,
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

  deleteDog = () => {
    dogsApiService.deleteDogs();
    let updatedDogs = [...this.state.dogs];
    updatedDogs.shift();
    this.updateUser();
    this.setState({
      dogs: updatedDogs,
    });
  };
  deleteCat = () => {
    catsApiService.deleteCats();
    let updatedCats = [...this.state.cats];
    updatedCats.shift();
    this.updateUser();
    this.setState({
      cats: updatedCats,
    });
  };

  render() {
    const { dogs, cats, users, user, error } = this.state;
    if (cats !== null) {
      return (
        <div>
          <section>
            <Users users={users} />
          </section>

          <div>
            <section>
              <h2>Dogs</h2>
              <Adopt
                pets={dogs}
                adopt={this.deleteDog}
                user={user}
                error={error}
              />
            </section>

            <section>
              <h2>Cats</h2>
              <Adopt
                pets={cats}
                adopt={this.deleteCat}
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
