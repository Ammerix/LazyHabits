import Habit from "./habit.model";

const rootEndpoint = require('./assets/habits.json');

export interface Vetement {
  idHabit: number;
  nomHabit: string;
  imageHabit: string;
  categorieHabit: string;
}

class HabitDbApi {
  searchHabitsByName(name: string): Promise<Array<Habit>> {
    return this.fetchFromApi(
      `${rootEndpoint}/search.php?s=${name.trim()}`
    ).then((vetements) => this.createHabits(vetements));
  }

  findHabitById(id: number): Promise<Habit> {
    return this.fetchFromApi(`${rootEndpoint}/lookup.php?i=${id}`).then(
      (vetements) => this.createHabit(vetements[0])
    );
  }

  private fetchFromApi(query: string): Promise<Array<Vetement>> {
    return (
      fetch(query)
        // FIXME: JSON parse error when ingredient is not found
        .then((response) => response.json())
        .then((jsonResponse) => jsonResponse.vetements || [])
        .catch((error) => {
          console.error(error);
        })
    );
  }

  //Inutile vu que propriétés déjà bien nommées dans APi ?
  private createHabit(vetement: Vetement): Habit {
    return new Habit(
      vetement.idHabit,
      vetement.nomHabit,
      vetement.imageHabit,
      vetement.categorieHabit
    );
  }

  private createHabits(vetements: Array<Vetement>): Array<Habit> {
    // Create cocktails
    return vetements.map((vetement) => this.createHabit(vetement));
  }
}

export default new HabitDbApi();
