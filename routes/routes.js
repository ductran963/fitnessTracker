const router = require("express").Router();
const Workout = require("../models/workout.js");

//Mini project example reference
// router.post("/api/transaction", ({ body }, res) => {
//     Transaction.create(body)
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
//Working on adding new workout
router.post("/api/workouts", ({ body }, res) => {
    console.log(body)
    var workout = {
        exercises:
            {
                type: body.type,
                name: body.name,
                duration: body.duration,
                weight: body.weight,
                reps: body.reps,
                sets: body.sets,
                distance: body.distance
            },

    }
    Workout.create(workout, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    })
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Working on adding excerises to the workout
router.put("/api/workouts/:id", (req, res) => {
    var exercise = req.body;
    Workout.findByIdAndUpdate(req.params.id, {
        $push: { exercises: exercise }
    }, { new: true })
        .then(function (dbWorkout) {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Mini project example reference 
// router.get("/api/transaction", (req, res) => {
//     Transaction.find({})
//       .sort({ date: -1 })
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

//Obtaining user exercise info by using find method
router.get("/api/workouts", (req, res) => {
    console.log("Testing, obtaining exercise info")
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
//Obtaining more excercise info using find method
router.get("/api/workouts/range", (req, res) => {
    console.log("Testing, obtaining exercise info")
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;