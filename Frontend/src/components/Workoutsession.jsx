import React from "react"

const Workoutsession = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>Focus on building muscular
          strength and endurance through weights, resistance bands,or
          body weight exercises,improving overall muscle mass and bone destiny.
        </p>
        <img src ="/imgp.webp" alt ="workout"/>
        <div className="wrapper">
          <h1>FEATURED BOOTCAMP</h1>
          <p>A high-intensity, dynamic workout that
            combines strength training,cardio,and agility exercises
            in a fast-paced environment.Bootcamp workouts often
            include a mix of bodyweight exercises,resistance training,
            and functional movements, designed to push participants
            to their limits and improve overall fitness.
          </p>
          <div className="bootcamps">
            <div>
              <h4>Upper Body Boot Camp</h4>
              <p>Burpees: 3 sets of 10 reps</p>
              <p>Push-ups: 3 sets of 15 reps</p>
              <p>Dumbbell rows: 3 sets of 12 reps per arm</p>
            </div>

            <div>
              <h4>Lower Body Boot Camp</h4>
              <p>Squates: 3 sets of 12 reps </p>
              <p>Lunges: 3 sets of 10 reps</p>
              <p>Deadlifts: 3 sets of 10 reps</p>
            </div>

            <div>
              <h4>Core Boot Camp</h4>
              <p>Rusian twists: 3 sets of 12 reps</p>
              <p>Leg raises : 3 sets of 12 reps</p>
              <p>Bycycle crunches : 3 sets of 12 reps</p>
            </div>

            <div>
              <h4>Full body Boot Camp</h4>
              <p>Sprints : 3 sets of 30 seconds</p>
              <p>Box jumps : 3 sets of 10 reps</p>
              <p>Battling ropes : 3 sets of 30 seconds</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Workoutsession