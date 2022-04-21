import Habit from "./habit.model";


class HabitDbApi {
  
  fetchFromApi(query: string): Promise<Array<Habit>> {
    return (
      fetch(query)
        // FIXME: JSON parse error when ingredient is not found
        .then((response) => response.json())
        .then((jsonResponse) => jsonResponse || [])
        .catch((error) => {
          console.error(error);
        })
    );
  }

 
}

export default new HabitDbApi();
