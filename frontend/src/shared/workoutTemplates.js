const workoutTemplates = [

  // =====================================================
  // MUSCLE GAIN
  // =====================================================

  // Beginner - Home
  {
  id: "muscle_gain_beginner_home",

  goal: "muscle_gain",

  level: "Beginner",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "45-60 min",

  weeklyFrequency: 5,

  equipment: [
    "Bodyweight"
  ],

  days: [

    {
      day: 1,

      title: "Push",

      warmup: [
        "jumping_jacks",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "push_up",
          alternatives: [
            "incline_push_up",
            "knee_push_up"
          ],
          sets: 4,
          reps: "10-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "pike_push_up",
          alternatives: [],
          sets: 3,
          reps: "10-12",
          rest: 60,
          notes: ""
        },

        {
          primary: "chair_dips",
          alternatives: [
            "diamond_push_up"
          ],
          sets: 3,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "45 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Pull",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "superman",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "reverse_snow_angel",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "bird_dog",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "cat_cow"
      ]
    },

    {
      day: 3,

      title: "Legs",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 4,
          reps: "15-20",
          rest: 60,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 3,
          reps: "12 each leg",
          rest: 60,
          notes: ""
        },

        {
          primary: "glute_bridge",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [],
          sets: 3,
          reps: "20",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Active Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "30 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose",
        "cat_cow"
      ]
    },

    {
      day: 5,

      title: "Upper Body",

      warmup: [
        "arm_circles"
      ],

      exercises: [

        {
          primary: "wide_push_up",
          alternatives: [
            "push_up"
          ],
          sets: 4,
          reps: "10-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "diamond_push_up",
          alternatives: [
            "chair_dips"
          ],
          sets: 3,
          reps: "10",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "60 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Lower Body + Core",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 60,
          notes: ""
        },

        {
          primary: "wall_sit",
          alternatives: [],
          sets: 3,
          reps: "45 sec",
          rest: 45,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 3,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Beginner - Gym

  {
  id: "muscle_gain_beginner_gym",

  goal: "muscle_gain",

  level: "Beginner",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "60-75 min",

  weeklyFrequency: 5,

  equipment: [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Machine"
  ],

  days: [

    {
      day: 1,

      title: "Push",

      warmup: [
        "treadmill_walk",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "bench_press",
          alternatives: [
            "machine_chest_press",
            "push_up"
          ],
          sets: 4,
          reps: "8-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "incline_dumbbell_press",
          alternatives: [
            "incline_machine_press"
          ],
          sets: 3,
          reps: "10-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 3,
          reps: "10-12",
          rest: 75,
          notes: ""
        },

        {
          primary: "tricep_pushdown",
          alternatives: [
            "overhead_tricep_extension"
          ],
          sets: 3,
          reps: "12-15",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "chest_stretch",
        "shoulder_stretch"
      ]
    },

    {
      day: 2,

      title: "Pull",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "lat_pulldown",
          alternatives: [
            "pull_up",
            "assisted_pull_up"
          ],
          sets: 4,
          reps: "10-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "seated_cable_row",
          alternatives: [
            "barbell_row",
            "dumbbell_row"
          ],
          sets: 3,
          reps: "10-12",
          rest: 75,
          notes: ""
        },

        {
          primary: "face_pull",
          alternatives: [
            "rear_delt_fly"
          ],
          sets: 3,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "barbell_curl",
          alternatives: [
            "dumbbell_curl"
          ],
          sets: 3,
          reps: "10-12",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "lat_stretch"
      ]
    },

    {
      day: 3,

      title: "Legs",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "barbell_squat",
          alternatives: [
            "smith_machine_squat",
            "goblet_squat"
          ],
          sets: 4,
          reps: "8-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "leg_press",
          alternatives: [
            "bodyweight_squat"
          ],
          sets: 3,
          reps: "12",
          rest: 75,
          notes: ""
        },

        {
          primary: "leg_extension",
          alternatives: [],
          sets: 3,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [
            "seated_calf_raise"
          ],
          sets: 4,
          reps: "15-20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Active Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "30 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Upper Body",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "incline_bench_press",
          alternatives: [
            "incline_dumbbell_press"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "lat_pulldown",
          alternatives: [
            "pull_up"
          ],
          sets: 4,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "lateral_raise",
          alternatives: [
            "machine_lateral_raise"
          ],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 6,

      title: "Lower Body + Core",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "romanian_deadlift",
          alternatives: [
            "dumbbell_rdl"
          ],
          sets: 4,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 3,
          reps: "12 each leg",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "60 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hip_flexor_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},
  // Intermediate - Home

  {
  id: "muscle_gain_intermediate_home",

  goal: "muscle_gain",

  level: "Intermediate",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "60-75 min",

  weeklyFrequency: 6,

  equipment: [
    "Bodyweight"
  ],

  days: [

    {
      day: 1,

      title: "Push",

      warmup: [
        "jumping_jacks",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "push_up",
          alternatives: [
            "incline_push_up"
          ],
          sets: 4,
          reps: "15-20",
          rest: 60,
          notes: ""
        },

        {
          primary: "wide_push_up",
          alternatives: [],
          sets: 4,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "diamond_push_up",
          alternatives: [],
          sets: 3,
          reps: "10-12",
          rest: 60,
          notes: ""
        },

        {
          primary: "pike_push_up",
          alternatives: [],
          sets: 3,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "chair_dips",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Pull",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "superman",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        },

        {
          primary: "reverse_snow_angel",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "bird_dog",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "cat_cow"
      ]
    },

    {
      day: 3,

      title: "Legs",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 5,
          reps: "20",
          rest: 60,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "15 each leg",
          rest: 60,
          notes: ""
        },

        {
          primary: "bulgarian_split_squat",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 75,
          notes: ""
        },

        {
          primary: "glute_bridge",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [],
          sets: 4,
          reps: "25",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Active Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "35 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Upper Body",

      warmup: [
        "arm_circles"
      ],

      exercises: [

        {
          primary: "archer_push_up",
          alternatives: [
            "wide_push_up"
          ],
          sets: 3,
          reps: "8-10",
          rest: 75,
          notes: ""
        },

        {
          primary: "wide_push_up",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "diamond_push_up",
          alternatives: [],
          sets: 4,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "75 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Lower Body + Core",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "jump_squat",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "wall_sit",
          alternatives: [],
          sets: 4,
          reps: "60 sec",
          rest: 45,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 4,
          reps: "25",
          rest: 45,
          notes: ""
        },

        {
          primary: "leg_raise",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Intermediate - Gym

  {
  id: "muscle_gain_intermediate_gym",

  goal: "muscle_gain",

  level: "Intermediate",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "75-90 min",

  weeklyFrequency: 6,

  equipment: [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Machine"
  ],

  days: [

    {
      day: 1,

      title: "Push",

      warmup: [
        "treadmill_walk",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "bench_press",
          alternatives: [
            "machine_chest_press",
            "push_up"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "incline_bench_press",
          alternatives: [
            "incline_dumbbell_press"
          ],
          sets: 4,
          reps: "10-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "cable_fly",
          alternatives: [
            "pec_deck"
          ],
          sets: 3,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 4,
          reps: "10-12",
          rest: 75,
          notes: ""
        },

        {
          primary: "lateral_raise",
          alternatives: [
            "machine_lateral_raise"
          ],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "tricep_pushdown",
          alternatives: [
            "overhead_tricep_extension"
          ],
          sets: 3,
          reps: "12-15",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "chest_stretch",
        "shoulder_stretch"
      ]
    },

    {
      day: 2,

      title: "Pull",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "lat_pulldown",
          alternatives: [
            "pull_up",
            "assisted_pull_up"
          ],
          sets: 4,
          reps: "10-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "barbell_row",
          alternatives: [
            "dumbbell_row",
            "seated_cable_row"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "face_pull",
          alternatives: [
            "rear_delt_fly"
          ],
          sets: 3,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "barbell_curl",
          alternatives: [
            "dumbbell_curl"
          ],
          sets: 3,
          reps: "10-12",
          rest: 60,
          notes: ""
        },

        {
          primary: "hammer_curl",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "lat_stretch"
      ]
    },

    {
      day: 3,

      title: "Legs",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "barbell_squat",
          alternatives: [
            "smith_machine_squat"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "romanian_deadlift",
          alternatives: [
            "dumbbell_rdl"
          ],
          sets: 4,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "leg_press",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 75,
          notes: ""
        },

        {
          primary: "leg_extension",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "leg_curl",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [
            "seated_calf_raise"
          ],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Active Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "35 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Upper Body",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "incline_bench_press",
          alternatives: [
            "incline_dumbbell_press"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "lat_pulldown",
          alternatives: [
            "pull_up"
          ],
          sets: 4,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [],
          sets: 3,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "barbell_curl",
          alternatives: [],
          sets: 3,
          reps: "10",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 6,

      title: "Lower Body + Core",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "romanian_deadlift",
          alternatives: [],
          sets: 4,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 3,
          reps: "15 each leg",
          rest: 60,
          notes: ""
        },

        {
          primary: "hanging_leg_raise",
          alternatives: [
            "leg_raise"
          ],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "75 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hip_flexor_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Advanced - Home

  {
  id: "muscle_gain_advanced_home",

  goal: "muscle_gain",

  level: "Advanced",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "75-90 min",

  weeklyFrequency: 6,

  equipment: [
    "Bodyweight",
    "Resistance Band",
    "Pull Up Bar",
    "Dumbbells (Optional)"
  ],

  days: [

    {
      day: 1,

      title: "Push Strength",

      warmup: [
        "jumping_jacks",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "archer_push_up",
          alternatives: [
            "explosive_push_up"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: "Focus on strength."
        },

        {
          primary: "diamond_push_up",
          alternatives: [],
          sets: 4,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "pike_push_up",
          alternatives: [],
          sets: 4,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "chair_dips",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "90 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Pull",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "pull_up",
          alternatives: [
            "resistance_band_row"
          ],
          sets: 4,
          reps: "8-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "superman",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        },

        {
          primary: "reverse_snow_angel",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        },

        {
          primary: "bird_dog",
          alternatives: [],
          sets: 3,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "cat_cow"
      ]
    },

    {
      day: 3,

      title: "Legs",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "jump_squat",
          alternatives: [],
          sets: 5,
          reps: "15",
          rest: 75,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "20 each leg",
          rest: 60,
          notes: ""
        },

        {
          primary: "bulgarian_split_squat",
          alternatives: [],
          sets: 4,
          reps: "12 each leg",
          rest: 75,
          notes: ""
        },

        {
          primary: "glute_bridge",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [],
          sets: 5,
          reps: "25",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "40 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Upper Body",

      warmup: [
        "arm_circles"
      ],

      exercises: [

        {
          primary: "explosive_push_up",
          alternatives: [
            "archer_push_up"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "pull_up",
          alternatives: [],
          sets: 4,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "diamond_push_up",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "90 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Legs + Core",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "jump_squat",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 60,
          notes: ""
        },

        {
          primary: "wall_sit",
          alternatives: [],
          sets: 4,
          reps: "90 sec",
          rest: 45,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 4,
          reps: "30",
          rest: 45,
          notes: ""
        },

        {
          primary: "leg_raise",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Advanced - Gym

  {
  id: "muscle_gain_advanced_gym",

  goal: "muscle_gain",

  level: "Advanced",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "90-105 min",

  weeklyFrequency: 6,

  equipment: [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Machine",
    "Pull Up Bar"
  ],

  days: [

    {
      day: 1,

      title: "Push Strength",

      warmup: [
        "treadmill_walk",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "bench_press",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 5,
          reps: "5-8",
          rest: 120,
          notes: "Go heavy while maintaining proper form."
        },

        {
          primary: "incline_bench_press",
          alternatives: [
            "incline_dumbbell_press"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "weighted_dips",
          alternatives: [
            "chest_dips"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "lateral_raise",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "tricep_pushdown",
          alternatives: [
            "rope_pushdown"
          ],
          sets: 4,
          reps: "12-15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "chest_stretch",
        "shoulder_stretch"
      ]
    },

    {
      day: 2,

      title: "Pull Strength",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "weighted_pull_up",
          alternatives: [
            "pull_up",
            "lat_pulldown"
          ],
          sets: 5,
          reps: "6-8",
          rest: 120,
          notes: ""
        },

        {
          primary: "barbell_row",
          alternatives: [
            "t_bar_row"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "seated_cable_row",
          alternatives: [],
          sets: 4,
          reps: "10-12",
          rest: 75,
          notes: ""
        },

        {
          primary: "face_pull",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "barbell_curl",
          alternatives: [],
          sets: 4,
          reps: "8-10",
          rest: 60,
          notes: ""
        },

        {
          primary: "hammer_curl",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "lat_stretch"
      ]
    },

    {
      day: 3,

      title: "Leg Strength",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "barbell_squat",
          alternatives: [
            "smith_machine_squat"
          ],
          sets: 5,
          reps: "5-8",
          rest: 120,
          notes: ""
        },

        {
          primary: "romanian_deadlift",
          alternatives: [],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "leg_press",
          alternatives: [],
          sets: 4,
          reps: "10-12",
          rest: 75,
          notes: ""
        },

        {
          primary: "leg_extension",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "leg_curl",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [
            "seated_calf_raise"
          ],
          sets: 5,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,
      title: "Recovery",
      warmup: [],
      exercises: [
        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "40 min",
          rest: 0,
          notes: ""
        }
      ],
      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,
      title: "Upper Hypertrophy",
      warmup: [
        "rowing_machine"
      ],
      exercises: [
        {
          primary: "incline_bench_press",
          alternatives: [],
          sets: 4,
          reps: "10-12",
          rest: 75,
          notes: ""
        },
        {
          primary: "lat_pulldown",
          alternatives: [
            "pull_up"
          ],
          sets: 4,
          reps: "10-12",
          rest: 75,
          notes: ""
        },
        {
          primary: "shoulder_press",
          alternatives: [],
          sets: 3,
          reps: "10",
          rest: 75,
          notes: ""
        },
        {
          primary: "barbell_curl",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        },
        {
          primary: "rope_pushdown",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        }
      ],
      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 6,
      title: "Lower + Core",
      warmup: [
        "cycling"
      ],
      exercises: [
        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "15 each leg",
          rest: 60,
          notes: ""
        },
        {
          primary: "hanging_leg_raise",
          alternatives: [
            "leg_raise"
          ],
          sets: 4,
          reps: "15",
          rest: 45,
          notes: ""
        },
        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "90 sec",
          rest: 45,
          notes: ""
        }
      ],
      cooldown: [
        "hip_flexor_stretch"
      ]
    },

    {
      day: 7,
      title: "Rest",
      warmup: [],
      exercises: [],
      cooldown: []
    }

  ]
},



  // =====================================================
  // WEIGHT LOSS
  // =====================================================

  // Beginner - Home


  {
  id: "weight_loss_beginner_home",

  goal: "weight_loss",

  level: "Beginner",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "40-55 min",

  weeklyFrequency: 6,

  equipment: [
    "Bodyweight"
  ],

  days: [

    {
      day: 1,

      title: "Upper Body + Cardio",

      warmup: [
        "jumping_jacks",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "push_up",
          alternatives: [
            "incline_push_up",
            "knee_push_up"
          ],
          sets: 3,
          reps: "12-15",
          rest: 45,
          notes: ""
        },

        {
          primary: "pike_push_up",
          alternatives: [],
          sets: 3,
          reps: "10-12",
          rest: 45,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 4,
          reps: "30 sec",
          rest: 30,
          notes: "Keep the intensity high."
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "45 sec",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Lower Body + Cardio",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 3,
          reps: "15 each leg",
          rest: 45,
          notes: ""
        },

        {
          primary: "jumping_jacks",
          alternatives: [],
          sets: 4,
          reps: "45 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [],
          sets: 3,
          reps: "20",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "HIIT",

      warmup: [
        "walking"
      ],

      exercises: [

        {
          primary: "jumping_jacks",
          alternatives: [],
          sets: 5,
          reps: "45 sec",
          rest: 15,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 5,
          reps: "30 sec",
          rest: 15,
          notes: ""
        },

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 4,

      title: "Recovery Walk",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "35 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Full Body",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "push_up",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        },

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 3,
          reps: "20",
          rest: 45,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 3,
          reps: "30",
          rest: 30,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "60 sec",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Core + Cardio",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "60 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "leg_raise",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 4,
          reps: "30 sec",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Beginner - Gym

  {
  id: "weight_loss_beginner_gym",

  goal: "weight_loss",

  level: "Beginner",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "50-65 min",

  weeklyFrequency: 6,

  equipment: [
    "Machine",
    "Dumbbell",
    "Cable",
    "Treadmill",
    "Cycle"
  ],

  days: [

    {
      day: 1,

      title: "Upper Body + Cardio",

      warmup: [
        "treadmill_walk"
      ],

      exercises: [

        {
          primary: "machine_chest_press",
          alternatives: [
            "bench_press",
            "push_up"
          ],
          sets: 3,
          reps: "12-15",
          rest: 45,
          notes: ""
        },

        {
          primary: "lat_pulldown",
          alternatives: [
            "assisted_pull_up"
          ],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        },

        {
          primary: "treadmill_run",
          alternatives: [
            "cycling"
          ],
          sets: 1,
          reps: "15 min",
          rest: 0,
          notes: "Moderate intensity."
        }

      ],

      cooldown: [
        "chest_stretch"
      ]
    },

    {
      day: 2,

      title: "Lower Body + Cardio",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "leg_press",
          alternatives: [
            "bodyweight_squat"
          ],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 3,
          reps: "15 each leg",
          rest: 45,
          notes: ""
        },

        {
          primary: "leg_extension",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "treadmill_incline_walk",
          alternatives: [
            "stair_climber"
          ],
          sets: 1,
          reps: "15 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "HIIT",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "rowing_machine",
          alternatives: [],
          sets: 8,
          reps: "30 sec",
          rest: 30,
          notes: "Sprint intervals."
        },

        {
          primary: "battle_rope",
          alternatives: [],
          sets: 5,
          reps: "30 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "burpee",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "40 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "mobility_flow"
      ]
    },

    {
      day: 5,

      title: "Full Body",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "goblet_squat",
          alternatives: [
            "leg_press"
          ],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "dumbbell_row",
          alternatives: [
            "seated_cable_row"
          ],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        },

        {
          primary: "push_up",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        },

        {
          primary: "elliptical",
          alternatives: [
            "cycling"
          ],
          sets: 1,
          reps: "15 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Core + Cardio",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "cable_crunch",
          alternatives: [
            "leg_raise"
          ],
          sets: 3,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "60 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "treadmill_run",
          alternatives: [
            "rowing_machine"
          ],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Intermediate - Home

  {
  id: "weight_loss_intermediate_home",

  goal: "weight_loss",

  level: "Intermediate",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "55-70 min",

  weeklyFrequency: 6,

  equipment: [
    "Bodyweight",
    "Resistance Band (Optional)",
    "Dumbbells (Optional)"
  ],

  days: [

    {
      day: 1,
      title: "Upper Body + HIIT",

      warmup: [
        "jumping_jacks",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "push_up",
          alternatives: [
            "wide_push_up"
          ],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "pike_push_up",
          alternatives: [],
          sets: 4,
          reps: "12",
          rest: 30,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 5,
          reps: "40 sec",
          rest: 20,
          notes: "High intensity."
        },

        {
          primary: "burpee",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Legs + Cardio",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "jump_squat",
          alternatives: [
            "bodyweight_squat"
          ],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "15 each leg",
          rest: 30,
          notes: ""
        },

        {
          primary: "wall_sit",
          alternatives: [],
          sets: 4,
          reps: "60 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "jumping_jacks",
          alternatives: [],
          sets: 5,
          reps: "45 sec",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "HIIT",

      warmup: [
        "walking"
      ],

      exercises: [

        {
          primary: "burpee",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 5,
          reps: "45 sec",
          rest: 20,
          notes: ""
        },

        {
          primary: "jump_squat",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "40 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "mobility_flow"
      ]
    },

    {
      day: 5,

      title: "Full Body",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "push_up",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "jump_squat",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 4,
          reps: "40 sec",
          rest: 20,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "75 sec",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Core + Conditioning",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "leg_raise",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 4,
          reps: "75 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 5,
          reps: "40 sec",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Intermediate - Gym

  {
  id: "weight_loss_intermediate_gym",

  goal: "weight_loss",

  level: "Intermediate",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "60-75 min",

  weeklyFrequency: 6,

  equipment: [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Machine",
    "Treadmill",
    "Cycle",
    "Rowing Machine"
  ],

  days: [

    {
      day: 1,
      title: "Upper Body + Cardio",

      warmup: [
        "treadmill_walk"
      ],

      exercises: [

        {
          primary: "incline_bench_press",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 4,
          reps: "10-12",
          rest: 45,
          notes: ""
        },

        {
          primary: "lat_pulldown",
          alternatives: [
            "pull_up",
            "assisted_pull_up"
          ],
          sets: 4,
          reps: "10-12",
          rest: 45,
          notes: ""
        },

        {
          primary: "seated_cable_row",
          alternatives: [
            "dumbbell_row"
          ],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        },

        {
          primary: "treadmill_run",
          alternatives: [
            "rowing_machine"
          ],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: "Maintain moderate pace."
        }

      ],

      cooldown: [
        "lat_stretch"
      ]
    },

    {
      day: 2,
      title: "Legs + Cardio",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "leg_press",
          alternatives: [
            "goblet_squat"
          ],
          sets: 4,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "15 each leg",
          rest: 45,
          notes: ""
        },

        {
          primary: "romanian_deadlift",
          alternatives: [
            "dumbbell_rdl"
          ],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "stair_climber",
          alternatives: [
            "treadmill_incline_walk"
          ],
          sets: 1,
          reps: "15 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,
      title: "HIIT",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "battle_rope",
          alternatives: [],
          sets: 6,
          reps: "30 sec",
          rest: 20,
          notes: ""
        },

        {
          primary: "burpee",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "rowing_machine",
          alternatives: [],
          sets: 8,
          reps: "30 sec",
          rest: 30,
          notes: "Sprint intervals."
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 4,
      title: "Recovery",

      warmup: [],

      exercises: [
        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "40 min",
          rest: 0,
          notes: ""
        }
      ],

      cooldown: [
        "mobility_flow"
      ]
    },

    {
      day: 5,
      title: "Full Body",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "goblet_squat",
          alternatives: [
            "leg_press"
          ],
          sets: 4,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "push_up",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 3,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "dumbbell_row",
          alternatives: [
            "seated_cable_row"
          ],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        },

        {
          primary: "elliptical",
          alternatives: [
            "cycling"
          ],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,
      title: "Core + Cardio",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "cable_crunch",
          alternatives: [
            "leg_raise"
          ],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 4,
          reps: "75 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "rowing_machine",
          alternatives: [
            "treadmill_run"
          ],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 7,
      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Advanced - Home

  {
  id: "weight_loss_advanced_home",

  goal: "weight_loss",

  level: "Advanced",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "70-90 min",

  weeklyFrequency: 6,

  equipment: [
    "Bodyweight",
    "Resistance Band",
    "Pull Up Bar",
    "Dumbbells (Optional)"
  ],

  days: [

    {
      day: 1,
      title: "Upper Body HIIT",

      warmup: [
        "jumping_jacks",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "explosive_push_up",
          alternatives: [
            "archer_push_up"
          ],
          sets: 4,
          reps: "10",
          rest: 30,
          notes: ""
        },

        {
          primary: "pull_up",
          alternatives: [
            "resistance_band_row"
          ],
          sets: 4,
          reps: "10",
          rest: 45,
          notes: ""
        },

        {
          primary: "burpee",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 5,
          reps: "45 sec",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Lower Body Power",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "jump_squat",
          alternatives: [],
          sets: 5,
          reps: "20",
          rest: 30,
          notes: ""
        },

        {
          primary: "bulgarian_split_squat",
          alternatives: [],
          sets: 4,
          reps: "15 each leg",
          rest: 45,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "20 each leg",
          rest: 30,
          notes: ""
        },

        {
          primary: "high_knees",
          alternatives: [],
          sets: 5,
          reps: "40 sec",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "HIIT Circuit",

      warmup: [
        "walking"
      ],

      exercises: [

        {
          primary: "burpee",
          alternatives: [],
          sets: 5,
          reps: "15",
          rest: 20,
          notes: ""
        },

        {
          primary: "jumping_jacks",
          alternatives: [],
          sets: 5,
          reps: "60 sec",
          rest: 15,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 5,
          reps: "45 sec",
          rest: 20,
          notes: ""
        },

        {
          primary: "jump_squat",
          alternatives: [],
          sets: 5,
          reps: "15",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "45 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "mobility_flow"
      ]
    },

    {
      day: 5,

      title: "Full Body Conditioning",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "explosive_push_up",
          alternatives: [],
          sets: 4,
          reps: "10",
          rest: 30,
          notes: ""
        },

        {
          primary: "jump_squat",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "pull_up",
          alternatives: [],
          sets: 4,
          reps: "8-10",
          rest: 45,
          notes: ""
        },

        {
          primary: "burpee",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Core + Cardio",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "plank",
          alternatives: [],
          sets: 4,
          reps: "90 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "leg_raise",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 30,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 5,
          reps: "45 sec",
          rest: 20,
          notes: ""
        },

        {
          primary: "high_knees",
          alternatives: [],
          sets: 5,
          reps: "45 sec",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Advanced - Gym

  {
  id: "weight_loss_advanced_gym",

  goal: "weight_loss",

  level: "Advanced",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "75-95 min",

  weeklyFrequency: 6,

  equipment: [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Machine",
    "Treadmill",
    "Cycle",
    "Rowing Machine",
    "Battle Rope"
  ],

  days: [

    {
      day: 1,

      title: "Upper Body + HIIT",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "incline_bench_press",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 4,
          reps: "10",
          rest: 45,
          notes: ""
        },

        {
          primary: "lat_pulldown",
          alternatives: [
            "weighted_pull_up",
            "pull_up"
          ],
          sets: 4,
          reps: "10",
          rest: 45,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 4,
          reps: "10",
          rest: 45,
          notes: ""
        },

        {
          primary: "battle_rope",
          alternatives: [],
          sets: 6,
          reps: "30 sec",
          rest: 20,
          notes: "High intensity finisher."
        }

      ],

      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 2,

      title: "Legs + Conditioning",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "barbell_squat",
          alternatives: [
            "smith_machine_squat"
          ],
          sets: 4,
          reps: "10",
          rest: 60,
          notes: ""
        },

        {
          primary: "romanian_deadlift",
          alternatives: [
            "dumbbell_rdl"
          ],
          sets: 4,
          reps: "10",
          rest: 60,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "15 each leg",
          rest: 45,
          notes: ""
        },

        {
          primary: "stair_climber",
          alternatives: [
            "treadmill_incline_walk"
          ],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "HIIT",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "rowing_machine",
          alternatives: [],
          sets: 10,
          reps: "30 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "battle_rope",
          alternatives: [],
          sets: 6,
          reps: "30 sec",
          rest: 20,
          notes: ""
        },

        {
          primary: "burpee",
          alternatives: [],
          sets: 5,
          reps: "15",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "45 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "mobility_flow"
      ]
    },

    {
      day: 5,

      title: "Full Body Circuit",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "goblet_squat",
          alternatives: [
            "barbell_squat"
          ],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "push_up",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "dumbbell_row",
          alternatives: [
            "seated_cable_row"
          ],
          sets: 4,
          reps: "12",
          rest: 30,
          notes: ""
        },

        {
          primary: "burpee",
          alternatives: [],
          sets: 4,
          reps: "12",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Core + Cardio",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "cable_crunch",
          alternatives: [
            "leg_raise"
          ],
          sets: 4,
          reps: "20",
          rest: 30,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 4,
          reps: "90 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "treadmill_run",
          alternatives: [
            "rowing_machine"
          ],
          sets: 1,
          reps: "25 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},



  // =====================================================
  // WEIGHT GAIN
  // =====================================================

  // Beginner - Home

  {
  id: "weight_gain_beginner_home",

  goal: "weight_gain",

  level: "Beginner",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "50-65 min",

  weeklyFrequency: 5,

  equipment: [
    "Bodyweight",
    "Resistance Band (Optional)",
    "Dumbbells (Optional)"
  ],

  days: [

    {
      day: 1,

      title: "Push",

      warmup: [
        "arm_circles",
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "push_up",
          alternatives: [
            "incline_push_up",
            "knee_push_up"
          ],
          sets: 4,
          reps: "10-12",
          rest: 90,
          notes: "Focus on controlled reps."
        },

        {
          primary: "pike_push_up",
          alternatives: [],
          sets: 3,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "chair_dips",
          alternatives: [
            "diamond_push_up"
          ],
          sets: 3,
          reps: "10-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "45 sec",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Pull",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "superman",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 75,
          notes: ""
        },

        {
          primary: "reverse_snow_angel",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 75,
          notes: ""
        },

        {
          primary: "bird_dog",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "cat_cow"
      ]
    },

    {
      day: 3,

      title: "Legs",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 5,
          reps: "15",
          rest: 90,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "12 each leg",
          rest: 75,
          notes: ""
        },

        {
          primary: "glute_bridge",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: "Light walk only."
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Full Body",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "push_up",
          alternatives: [],
          sets: 4,
          reps: "12",
          rest: 75,
          notes: ""
        },

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 75,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "60 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Optional Mobility",

      warmup: [],

      exercises: [

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: []
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},
  

  // Beginner - Gym

  {
  id: "weight_gain_beginner_gym",

  goal: "weight_gain",

  level: "Beginner",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "60-75 min",

  weeklyFrequency: 5,

  equipment: [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Machine"
  ],

  days: [

    {
      day: 1,

      title: "Push",

      warmup: [
        "treadmill_walk",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "bench_press",
          alternatives: [
            "machine_chest_press",
            "push_up"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: "Increase weight gradually."
        },

        {
          primary: "incline_dumbbell_press",
          alternatives: [
            "incline_machine_press"
          ],
          sets: 3,
          reps: "10-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 3,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "tricep_pushdown",
          alternatives: [
            "overhead_tricep_extension"
          ],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "chest_stretch"
      ]
    },

    {
      day: 2,

      title: "Pull",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "lat_pulldown",
          alternatives: [
            "pull_up",
            "assisted_pull_up"
          ],
          sets: 4,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "seated_cable_row",
          alternatives: [
            "barbell_row"
          ],
          sets: 3,
          reps: "10-12",
          rest: 75,
          notes: ""
        },

        {
          primary: "face_pull",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "barbell_curl",
          alternatives: [
            "dumbbell_curl"
          ],
          sets: 3,
          reps: "10",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "lat_stretch"
      ]
    },

    {
      day: 3,

      title: "Legs",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "barbell_squat",
          alternatives: [
            "smith_machine_squat"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "leg_press",
          alternatives: [
            "bodyweight_squat"
          ],
          sets: 3,
          reps: "12",
          rest: 75,
          notes: ""
        },

        {
          primary: "romanian_deadlift",
          alternatives: [
            "dumbbell_rdl"
          ],
          sets: 3,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [
            "seated_calf_raise"
          ],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: "Light walk only."
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Full Body",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "bench_press",
          alternatives: [
            "push_up"
          ],
          sets: 3,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "lat_pulldown",
          alternatives: [],
          sets: 3,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "barbell_squat",
          alternatives: [],
          sets: 3,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "60 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Mobility",

      warmup: [],

      exercises: [

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: []
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Intermediate - Home

  {
  id: "weight_gain_intermediate_home",

  goal: "weight_gain",

  level: "Intermediate",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "60-75 min",

  weeklyFrequency: 6,

  equipment: [
    "Bodyweight",
    "Resistance Band",
    "Pull Up Bar",
    "Dumbbells (Optional)"
  ],

  days: [

    {
      day: 1,

      title: "Push",

      warmup: [
        "arm_circles",
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "wide_push_up",
          alternatives: [
            "push_up"
          ],
          sets: 5,
          reps: "12-15",
          rest: 90,
          notes: ""
        },

        {
          primary: "diamond_push_up",
          alternatives: [],
          sets: 4,
          reps: "10-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "pike_push_up",
          alternatives: [],
          sets: 4,
          reps: "10-12",
          rest: 90,
          notes: ""
        },

        {
          primary: "chair_dips",
          alternatives: [],
          sets: 4,
          reps: "12-15",
          rest: 75,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Pull",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "pull_up",
          alternatives: [
            "resistance_band_row",
            "superman"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "superman",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 60,
          notes: ""
        },

        {
          primary: "reverse_snow_angel",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "bird_dog",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "lat_stretch"
      ]
    },

    {
      day: 3,

      title: "Legs",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 5,
          reps: "20",
          rest: 90,
          notes: ""
        },

        {
          primary: "bulgarian_split_squat",
          alternatives: [],
          sets: 4,
          reps: "12 each leg",
          rest: 75,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "15 each leg",
          rest: 75,
          notes: ""
        },

        {
          primary: "glute_bridge",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 60,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [],
          sets: 5,
          reps: "25",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: "Light recovery walk."
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Upper Body",

      warmup: [
        "arm_circles"
      ],

      exercises: [

        {
          primary: "archer_push_up",
          alternatives: [
            "wide_push_up"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "pull_up",
          alternatives: [
            "superman"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "diamond_push_up",
          alternatives: [],
          sets: 4,
          reps: "12",
          rest: 75,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "75 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Mobility + Core",

      warmup: [],

      exercises: [

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "90 sec",
          rest: 45,
          notes: ""
        },

        {
          primary: "leg_raise",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Intermediate - Gym

  {
  id: "weight_gain_intermediate_gym",

  goal: "weight_gain",

  level: "Intermediate",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "75-90 min",

  weeklyFrequency: 6,

  equipment: [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Machine",
    "Pull Up Bar"
  ],

  days: [

    {
      day: 1,

      title: "Push",

      warmup: [
        "treadmill_walk",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "bench_press",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 5,
          reps: "6-8",
          rest: 120,
          notes: "Increase weight gradually."
        },

        {
          primary: "incline_bench_press",
          alternatives: [
            "incline_dumbbell_press"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "lateral_raise",
          alternatives: [],
          sets: 3,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "tricep_pushdown",
          alternatives: [
            "skull_crusher"
          ],
          sets: 3,
          reps: "10-12",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "chest_stretch"
      ]
    },

    {
      day: 2,

      title: "Pull",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "pull_up",
          alternatives: [
            "lat_pulldown"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "barbell_row",
          alternatives: [
            "seated_cable_row"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "face_pull",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "barbell_curl",
          alternatives: [
            "dumbbell_curl"
          ],
          sets: 4,
          reps: "8-10",
          rest: 60,
          notes: ""
        },

        {
          primary: "hammer_curl",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "lat_stretch"
      ]
    },

    {
      day: 3,

      title: "Legs",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "barbell_squat",
          alternatives: [
            "smith_machine_squat"
          ],
          sets: 5,
          reps: "6-8",
          rest: 120,
          notes: ""
        },

        {
          primary: "romanian_deadlift",
          alternatives: [
            "dumbbell_rdl"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "leg_press",
          alternatives: [],
          sets: 4,
          reps: "10-12",
          rest: 75,
          notes: ""
        },

        {
          primary: "leg_extension",
          alternatives: [],
          sets: 3,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "leg_curl",
          alternatives: [],
          sets: 3,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [
            "seated_calf_raise"
          ],
          sets: 5,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Upper Body",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "incline_bench_press",
          alternatives: [],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "lat_pulldown",
          alternatives: [
            "pull_up"
          ],
          sets: 4,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [],
          sets: 4,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "barbell_curl",
          alternatives: [],
          sets: 3,
          reps: "10",
          rest: 60,
          notes: ""
        },

        {
          primary: "tricep_pushdown",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 6,

      title: "Core + Mobility",

      warmup: [],

      exercises: [

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "90 sec",
          rest: 45,
          notes: ""
        },

        {
          primary: "hanging_leg_raise",
          alternatives: [
            "leg_raise"
          ],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Advanced - Home

  {
  id: "weight_gain_advanced_home",

  goal: "weight_gain",

  level: "Advanced",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "75-90 min",

  weeklyFrequency: 6,

  equipment: [
    "Bodyweight",
    "Pull Up Bar",
    "Resistance Band",
    "Dumbbells"
  ],

  days: [

    {
      day: 1,

      title: "Push Strength",

      warmup: [
        "arm_circles",
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "archer_push_up",
          alternatives: [
            "explosive_push_up"
          ],
          sets: 5,
          reps: "8-10",
          rest: 120,
          notes: ""
        },

        {
          primary: "explosive_push_up",
          alternatives: [
            "diamond_push_up"
          ],
          sets: 4,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "pike_push_up",
          alternatives: [],
          sets: 4,
          reps: "12",
          rest: 90,
          notes: ""
        },

        {
          primary: "chair_dips",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 75,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Pull Strength",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "pull_up",
          alternatives: [
            "chin_up"
          ],
          sets: 5,
          reps: "8-10",
          rest: 120,
          notes: ""
        },

        {
          primary: "superman",
          alternatives: [],
          sets: 5,
          reps: "20",
          rest: 60,
          notes: ""
        },

        {
          primary: "reverse_snow_angel",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "bird_dog",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "lat_stretch"
      ]
    },

    {
      day: 3,

      title: "Leg Power",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "bulgarian_split_squat",
          alternatives: [],
          sets: 5,
          reps: "15 each leg",
          rest: 90,
          notes: ""
        },

        {
          primary: "jump_squat",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 75,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "20 each leg",
          rest: 75,
          notes: ""
        },

        {
          primary: "glute_bridge",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 60,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [],
          sets: 5,
          reps: "25",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "mobility_flow"
      ]
    },

    {
      day: 5,

      title: "Upper Body Volume",

      warmup: [
        "arm_circles"
      ],

      exercises: [

        {
          primary: "one_arm_push_up",
          alternatives: [
            "archer_push_up"
          ],
          sets: 4,
          reps: "5-8",
          rest: 120,
          notes: ""
        },

        {
          primary: "pull_up",
          alternatives: [],
          sets: 5,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "diamond_push_up",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 75,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "90 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Core + Mobility",

      warmup: [],

      exercises: [

        {
          primary: "plank",
          alternatives: [],
          sets: 4,
          reps: "90 sec",
          rest: 45,
          notes: ""
        },

        {
          primary: "leg_raise",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        },

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Advanced - Gym

  {
  id: "weight_gain_advanced_gym",

  goal: "weight_gain",

  level: "Advanced",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "90-110 min",

  weeklyFrequency: 6,

  equipment: [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Machine",
    "Smith Machine",
    "Pull Up Bar"
  ],

  days: [

    {
      day: 1,

      title: "Heavy Push",

      warmup: [
        "rowing_machine",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "bench_press",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 5,
          reps: "5-6",
          rest: 150,
          notes: "Increase weight every week if possible."
        },

        {
          primary: "incline_bench_press",
          alternatives: [
            "incline_dumbbell_press"
          ],
          sets: 4,
          reps: "6-8",
          rest: 120,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 4,
          reps: "6-8",
          rest: 120,
          notes: ""
        },

        {
          primary: "lateral_raise",
          alternatives: [],
          sets: 4,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "skull_crusher",
          alternatives: [
            "tricep_pushdown"
          ],
          sets: 4,
          reps: "10-12",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "chest_stretch"
      ]
    },

    {
      day: 2,

      title: "Heavy Pull",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "weighted_pull_up",
          alternatives: [
            "pull_up",
            "lat_pulldown"
          ],
          sets: 5,
          reps: "5-8",
          rest: 150,
          notes: ""
        },

        {
          primary: "barbell_row",
          alternatives: [
            "t_bar_row"
          ],
          sets: 5,
          reps: "6-8",
          rest: 120,
          notes: ""
        },

        {
          primary: "seated_cable_row",
          alternatives: [],
          sets: 4,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "face_pull",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "barbell_curl",
          alternatives: [
            "ez_bar_curl"
          ],
          sets: 4,
          reps: "8-10",
          rest: 75,
          notes: ""
        }

      ],

      cooldown: [
        "lat_stretch"
      ]
    },

    {
      day: 3,

      title: "Heavy Legs",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "barbell_squat",
          alternatives: [
            "smith_machine_squat"
          ],
          sets: 5,
          reps: "5-6",
          rest: 180,
          notes: ""
        },

        {
          primary: "deadlift",
          alternatives: [
            "romanian_deadlift"
          ],
          sets: 4,
          reps: "5",
          rest: 180,
          notes: ""
        },

        {
          primary: "leg_press",
          alternatives: [],
          sets: 4,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "leg_extension",
          alternatives: [],
          sets: 4,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "leg_curl",
          alternatives: [],
          sets: 4,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [
            "seated_calf_raise"
          ],
          sets: 5,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "mobility_flow"
      ]
    },

    {
      day: 5,

      title: "Upper Body Volume",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "incline_bench_press",
          alternatives: [],
          sets: 4,
          reps: "8",
          rest: 90,
          notes: ""
        },

        {
          primary: "weighted_pull_up",
          alternatives: [
            "lat_pulldown"
          ],
          sets: 4,
          reps: "8",
          rest: 90,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [],
          sets: 4,
          reps: "8",
          rest: 90,
          notes: ""
        },

        {
          primary: "hammer_curl",
          alternatives: [],
          sets: 3,
          reps: "10",
          rest: 60,
          notes: ""
        },

        {
          primary: "tricep_pushdown",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 6,

      title: "Core + Grip",

      warmup: [],

      exercises: [

        {
          primary: "hanging_leg_raise",
          alternatives: [
            "leg_raise"
          ],
          sets: 4,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 4,
          reps: "90 sec",
          rest: 45,
          notes: ""
        },

        {
          primary: "farmer_walk",
          alternatives: [],
          sets: 4,
          reps: "40 meters",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},



  // =====================================================
  // MAINTENANCE
  // =====================================================

  // Beginner - Home

  {
  id: "maintenance_beginner_home",

  goal: "maintenance",

  level: "Beginner",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "40-55 min",

  weeklyFrequency: 5,

  equipment: [
    "Bodyweight",
    "Yoga Mat"
  ],

  days: [

    {
      day: 1,

      title: "Full Body",

      warmup: [
        "jumping_jacks",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "push_up",
          alternatives: [
            "incline_push_up",
            "knee_push_up"
          ],
          sets: 3,
          reps: "10-12",
          rest: 60,
          notes: ""
        },

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "45 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Cardio + Core",

      warmup: [
        "walking"
      ],

      exercises: [

        {
          primary: "jumping_jacks",
          alternatives: [],
          sets: 4,
          reps: "40 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 3,
          reps: "20",
          rest: 30,
          notes: ""
        },

        {
          primary: "leg_raise",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "Upper Body",

      warmup: [
        "arm_circles"
      ],

      exercises: [

        {
          primary: "wide_push_up",
          alternatives: [
            "push_up"
          ],
          sets: 3,
          reps: "10-12",
          rest: 60,
          notes: ""
        },

        {
          primary: "chair_dips",
          alternatives: [
            "diamond_push_up"
          ],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "60 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 4,

      title: "Mobility + Recovery",

      warmup: [],

      exercises: [

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        },

        {
          primary: "cat_cow",
          alternatives: [],
          sets: 2,
          reps: "10",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Lower Body",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "bodyweight_squat",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 3,
          reps: "12 each leg",
          rest: 60,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [],
          sets: 3,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 6,

      title: "Active Lifestyle",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "30 min",
          rest: 0,
          notes: "Brisk walking."
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Beginner - Gym

  {
  id: "maintenance_beginner_gym",

  goal: "maintenance",

  level: "Beginner",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "45-60 min",

  weeklyFrequency: 5,

  equipment: [
    "Machine",
    "Dumbbell",
    "Cable",
    "Treadmill",
    "Cycle"
  ],

  days: [

    {
      day: 1,

      title: "Full Body",

      warmup: [
        "treadmill_walk"
      ],

      exercises: [

        {
          primary: "machine_chest_press",
          alternatives: [
            "bench_press",
            "push_up"
          ],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "lat_pulldown",
          alternatives: [
            "assisted_pull_up"
          ],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "leg_press",
          alternatives: [
            "bodyweight_squat"
          ],
          sets: 3,
          reps: "15",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 2,

      title: "Cardio + Core",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "treadmill_walk",
          alternatives: [
            "elliptical"
          ],
          sets: 1,
          reps: "25 min",
          rest: 0,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "45 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "cable_crunch",
          alternatives: [
            "leg_raise"
          ],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "Upper Body",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "seated_cable_row",
          alternatives: [
            "dumbbell_row"
          ],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "tricep_pushdown",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        },

        {
          primary: "barbell_curl",
          alternatives: [
            "dumbbell_curl"
          ],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery + Mobility",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "25 min",
          rest: 0,
          notes: ""
        },

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 5,

      title: "Lower Body",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "leg_press",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "leg_extension",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "leg_curl",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [
            "seated_calf_raise"
          ],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 6,

      title: "Active Lifestyle",

      warmup: [],

      exercises: [

        {
          primary: "elliptical",
          alternatives: [
            "cycling",
            "treadmill_walk"
          ],
          sets: 1,
          reps: "30 min",
          rest: 0,
          notes: "Comfortable pace."
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Intermediate - Home

  {
  id: "maintenance_intermediate_home",

  goal: "maintenance",

  level: "Intermediate",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "55-70 min",

  weeklyFrequency: 6,

  equipment: [
    "Bodyweight",
    "Resistance Band",
    "Pull Up Bar (Optional)",
    "Dumbbells (Optional)"
  ],

  days: [

    {
      day: 1,

      title: "Full Body Strength",

      warmup: [
        "jumping_jacks",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "push_up",
          alternatives: [
            "wide_push_up",
            "diamond_push_up"
          ],
          sets: 4,
          reps: "12-15",
          rest: 60,
          notes: ""
        },

        {
          primary: "bodyweight_squat",
          alternatives: [
            "jump_squat"
          ],
          sets: 4,
          reps: "18",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 4,
          reps: "60 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 2,

      title: "Cardio + Core",

      warmup: [
        "walking"
      ],

      exercises: [

        {
          primary: "jumping_jacks",
          alternatives: [],
          sets: 5,
          reps: "45 sec",
          rest: 20,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 4,
          reps: "30 sec",
          rest: 20,
          notes: ""
        },

        {
          primary: "leg_raise",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "Upper Body",

      warmup: [
        "arm_circles"
      ],

      exercises: [

        {
          primary: "pull_up",
          alternatives: [
            "superman"
          ],
          sets: 4,
          reps: "8-10",
          rest: 75,
          notes: ""
        },

        {
          primary: "chair_dips",
          alternatives: [
            "diamond_push_up"
          ],
          sets: 4,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "pike_push_up",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 4,

      title: "Mobility + Recovery",

      warmup: [],

      exercises: [

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "25 min",
          rest: 0,
          notes: ""
        },

        {
          primary: "cat_cow",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 5,

      title: "Lower Body",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "15 each leg",
          rest: 60,
          notes: ""
        },

        {
          primary: "bulgarian_split_squat",
          alternatives: [],
          sets: 3,
          reps: "12 each leg",
          rest: 75,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [],
          sets: 4,
          reps: "25",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 6,

      title: "Functional Fitness",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "burpee",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 45,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 4,
          reps: "30 sec",
          rest: 20,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "75 sec",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Intermediate - Gym

  {
  id: "maintenance_intermediate_gym",

  goal: "maintenance",

  level: "Intermediate",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "60-75 min",

  weeklyFrequency: 6,

  equipment: [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Machine",
    "Treadmill",
    "Cycle",
    "Rowing Machine"
  ],

  days: [

    {
      day: 1,

      title: "Upper Body",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "bench_press",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 3,
          reps: "10-12",
          rest: 75,
          notes: ""
        },

        {
          primary: "lat_pulldown",
          alternatives: [
            "pull_up"
          ],
          sets: 3,
          reps: "10-12",
          rest: 75,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 3,
          reps: "10-12",
          rest: 60,
          notes: ""
        },

        {
          primary: "face_pull",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 2,

      title: "Cardio + Core",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "treadmill_run",
          alternatives: [
            "rowing_machine",
            "elliptical"
          ],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        },

        {
          primary: "cable_crunch",
          alternatives: [
            "leg_raise"
          ],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "60 sec",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "Lower Body",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "barbell_squat",
          alternatives: [
            "leg_press"
          ],
          sets: 3,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "romanian_deadlift",
          alternatives: [
            "dumbbell_rdl"
          ],
          sets: 3,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "leg_extension",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "leg_curl",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "30 min",
          rest: 0,
          notes: ""
        },

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 5,

      title: "Full Body",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "goblet_squat",
          alternatives: [
            "barbell_squat"
          ],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "incline_bench_press",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 3,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "seated_cable_row",
          alternatives: [
            "dumbbell_row"
          ],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "farmer_walk",
          alternatives: [],
          sets: 3,
          reps: "30 meters",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 6,

      title: "Functional + Cardio",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "battle_rope",
          alternatives: [],
          sets: 4,
          reps: "30 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "rowing_machine",
          alternatives: [
            "cycling"
          ],
          sets: 1,
          reps: "15 min",
          rest: 0,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "75 sec",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Advanced - Home
 
{
  id: "maintenance_advanced_home",

  goal: "maintenance",

  level: "Advanced",

  location: "Home",

  durationWeeks: 12,

  estimatedWorkoutTime: "70-90 min",

  weeklyFrequency: 6,

  equipment: [
    "Bodyweight",
    "Pull Up Bar",
    "Resistance Band",
    "Dumbbells",
    "Yoga Mat"
  ],

  days: [

    {
      day: 1,

      title: "Upper Body Strength",

      warmup: [
        "jumping_jacks",
        "arm_circles"
      ],

      exercises: [

        {
          primary: "archer_push_up",
          alternatives: [
            "explosive_push_up",
            "push_up"
          ],
          sets: 4,
          reps: "8-10",
          rest: 75,
          notes: ""
        },

        {
          primary: "pull_up",
          alternatives: [
            "chin_up",
            "resistance_band_row"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "pike_push_up",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "90 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 2,

      title: "Athletic Legs",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "jump_squat",
          alternatives: [
            "bodyweight_squat"
          ],
          sets: 4,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "bulgarian_split_squat",
          alternatives: [],
          sets: 4,
          reps: "12 each leg",
          rest: 75,
          notes: ""
        },

        {
          primary: "walking_lunge",
          alternatives: [],
          sets: 4,
          reps: "15 each leg",
          rest: 60,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [],
          sets: 4,
          reps: "25",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "Conditioning",

      warmup: [
        "walking"
      ],

      exercises: [

        {
          primary: "burpee",
          alternatives: [],
          sets: 4,
          reps: "12",
          rest: 30,
          notes: ""
        },

        {
          primary: "mountain_climbers",
          alternatives: [],
          sets: 4,
          reps: "45 sec",
          rest: 20,
          notes: ""
        },

        {
          primary: "jumping_jacks",
          alternatives: [],
          sets: 4,
          reps: "60 sec",
          rest: 20,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 4,

      title: "Mobility + Recovery",

      warmup: [],

      exercises: [

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "30 min",
          rest: 0,
          notes: ""
        },

        {
          primary: "cat_cow",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 5,

      title: "Full Body",

      warmup: [
        "jumping_jacks"
      ],

      exercises: [

        {
          primary: "one_arm_push_up",
          alternatives: [
            "archer_push_up"
          ],
          sets: 3,
          reps: "5-8",
          rest: 90,
          notes: ""
        },

        {
          primary: "pull_up",
          alternatives: [],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "jump_squat",
          alternatives: [],
          sets: 4,
          reps: "15",
          rest: 60,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "90 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Core + Functional",

      warmup: [],

      exercises: [

        {
          primary: "leg_raise",
          alternatives: [],
          sets: 4,
          reps: "20",
          rest: 30,
          notes: ""
        },

        {
          primary: "bird_dog",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 30,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 4,
          reps: "90 sec",
          rest: 30,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
},

  // Advanced - Gym

  {
  id: "maintenance_advanced_gym",

  goal: "maintenance",

  level: "Advanced",

  location: "Gym",

  durationWeeks: 12,

  estimatedWorkoutTime: "75-90 min",

  weeklyFrequency: 6,

  equipment: [
    "Barbell",
    "Dumbbell",
    "Cable",
    "Machine",
    "Pull Up Bar",
    "Battle Rope",
    "Treadmill",
    "Rowing Machine"
  ],

  days: [

    {
      day: 1,

      title: "Upper Body Strength",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "bench_press",
          alternatives: [
            "machine_chest_press"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "weighted_pull_up",
          alternatives: [
            "pull_up",
            "lat_pulldown"
          ],
          sets: 4,
          reps: "8",
          rest: 90,
          notes: ""
        },

        {
          primary: "shoulder_press",
          alternatives: [
            "dumbbell_shoulder_press"
          ],
          sets: 4,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "face_pull",
          alternatives: [],
          sets: 3,
          reps: "15",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "shoulder_stretch"
      ]
    },

    {
      day: 2,

      title: "Lower Body Strength",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "barbell_squat",
          alternatives: [
            "smith_machine_squat"
          ],
          sets: 4,
          reps: "8",
          rest: 120,
          notes: ""
        },

        {
          primary: "romanian_deadlift",
          alternatives: [
            "dumbbell_rdl"
          ],
          sets: 4,
          reps: "8-10",
          rest: 90,
          notes: ""
        },

        {
          primary: "leg_press",
          alternatives: [],
          sets: 3,
          reps: "12",
          rest: 75,
          notes: ""
        },

        {
          primary: "standing_calf_raise",
          alternatives: [
            "seated_calf_raise"
          ],
          sets: 4,
          reps: "20",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "hamstring_stretch"
      ]
    },

    {
      day: 3,

      title: "Conditioning",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "battle_rope",
          alternatives: [],
          sets: 5,
          reps: "30 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "farmer_walk",
          alternatives: [],
          sets: 4,
          reps: "40 meters",
          rest: 60,
          notes: ""
        },

        {
          primary: "sled_push",
          alternatives: [
            "treadmill_incline_walk"
          ],
          sets: 4,
          reps: "20 meters",
          rest: 60,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 4,

      title: "Recovery",

      warmup: [],

      exercises: [

        {
          primary: "walking",
          alternatives: [],
          sets: 1,
          reps: "30 min",
          rest: 0,
          notes: ""
        },

        {
          primary: "mobility_flow",
          alternatives: [],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 5,

      title: "Full Body",

      warmup: [
        "rowing_machine"
      ],

      exercises: [

        {
          primary: "bench_press",
          alternatives: [],
          sets: 3,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "barbell_row",
          alternatives: [
            "seated_cable_row"
          ],
          sets: 3,
          reps: "10",
          rest: 75,
          notes: ""
        },

        {
          primary: "barbell_squat",
          alternatives: [],
          sets: 3,
          reps: "10",
          rest: 90,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 3,
          reps: "90 sec",
          rest: 45,
          notes: ""
        }

      ],

      cooldown: [
        "child_pose"
      ]
    },

    {
      day: 6,

      title: "Core + Cardio",

      warmup: [
        "cycling"
      ],

      exercises: [

        {
          primary: "hanging_leg_raise",
          alternatives: [
            "leg_raise"
          ],
          sets: 4,
          reps: "15",
          rest: 45,
          notes: ""
        },

        {
          primary: "plank",
          alternatives: [],
          sets: 4,
          reps: "90 sec",
          rest: 30,
          notes: ""
        },

        {
          primary: "rowing_machine",
          alternatives: [
            "treadmill_run"
          ],
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: ""
        }

      ],

      cooldown: [
        "full_body_stretch"
      ]
    },

    {
      day: 7,

      title: "Rest",

      warmup: [],

      exercises: [],

      cooldown: []
    }

  ]
}

];

module.exports = workoutTemplates;