const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const contract = {
    "Metadata": {
        "Id": "a3e19d55-64a6-4282-bb3c-d18c3f3e6e28",
        "CodeName_Hint": "Lynx",
        "Release": "3.0.0",
        "Type": "flashback",
        "Subtype": "flashback",
        "Title": "UI_CONTRACT_LYNX_TITLE",
        "Description": "UI_CONTRACT_LYNX_BRIEFING",
        "ScenePath": "assembly:/_pro/scenes/missions/trapped/scene_lynx.entity",
        "TileImage": "images/ruddy/lynx.jpg",
        "Location": "LOCATION_TRAPPED_WOLVERINE",
        "IsPublished": true,
        "LastUpdate": "2015-04-13T09:17:05.987Z",
        "CreationTimestamp": "2015-03-25T13:08:00.173Z",
        "CreatorUserId": "7545ee96-063a-49b6-a1d9-9fc2656e565a",
        "Entitlements": [
            "LOCATION_TRAPPED"
        ]
    },
    "UserData": {},
    "Data": {
        "RandomBricks": {
            "TimeOfDay": [
                "assembly:/_pro/scenes/missions/trapped/tod_day.brick",
                "assembly:/_pro/scenes/missions/thefacility/outfits_prologue.brick"
            ]
        },
        "Bricks": [
            "assembly:/_pro/scenes/missions/trapped/passenger_train.brick"
        ],
        "DevOnlyBricks": [],
        "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick"
                ]
            }
        ],
        "GameChangers": [],
        "GameDifficulties": [
            {
                "Difficulty": "easy",
                "Bricks": []
            },
            {
                "Difficulty": "normal",
                "Bricks": []
            },
            {
                "Difficulty": "hard",
                "Bricks": []
            }
        ],
        "Objectives": [
            {
                "Id": "5f1ddb3d-8606-479b-ae81-659a5b523f83",
                "Primary": true,
                "IsHidden": true,
                "Category": "primary",
                "ObjectiveType": "custom",
                "DisplayAsKillObjective": false,
                "ForceShowOnLoadingScreen": true,
                "Image": "images/ruddy/lynx_target.jpg",
                "BriefingName": "$loc UI_LYNX_TARGET_OBJ",
                "BriefingText": "$loc UI_LYNX_TARGET_DESC",
                "LongBriefingText": "$loc UI_LYNX_TARGET_LONGDESC",
                "HUDTemplate": {
                    "display": "$loc UI_LYNX_TARGET_OBJ",
                    "iconType": 17
                },
                "Type": "statemachine",
                "Scope": "hit",
                "Definition": {
                    "Context": {
                        "KilledActors": [],
                        "Targets": [],
                        "BodyCount": 0,
                        "BodyCountGoal": 2
                    },
                    "States": {
                        "Start": {
                            "TargetPicked": [
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "Targets",
                                            "$Value.RepositoryId"
                                        ]
                                    },
                                    "Transition": "TargetPicked"
                                }
                            ]
                        },
                        "TargetPicked": {
                            "Kill": [
                                {
                                    "Actions": {
                                        "$pushunique": [
                                            "KilledActors",
                                            "$Value.RepositoryId"
                                        ]
                                    }
                                },
                                {
                                    "Condition": {
                                        "$all": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$any": {
                                                    "in": "$.KilledActors",
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "setpieces": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.name_metricvalue",
                                                    "HideBody"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "109f96df-23b1-4f9a-850c-9f6929c22b7d"
                                                ]
                                            }
                                        ]
                                    },
                                    "Actions": {
                                        "$inc": "BodyCount"
                                    },
                                    "Transition": "ValidBody"
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.name_metricvalue",
                                                    "HideBody"
                                                ]
                                            },
                                            {
                                                "$not": {
                                                    "$eq": [
                                                        "$Value.RepositoryId",
                                                        "109f96df-23b1-4f9a-850c-9f6929c22b7d"
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "InvalidBody"
                                }
                            ]
                        },
                        "ValidBody": {
                            "BodyHidden": [
                                {
                                    "Condition": {
                                        "$inarray": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.RepositoryId"
                                                ]
                                            }
                                        }
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Transition": "TargetPicked"
                                }
                            ]
                        },
                        "InvalidBody": {
                            "BodyHidden": [
                                {
                                    "Condition": {
                                        "$inarray": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$Value.RepositoryId"
                                                ]
                                            }
                                        }
                                    },
                                    "Transition": "Failure"
                                },
                                {
                                    "Transition": "TargetPicked"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "Id": "c6c864fe-287c-4345-8a04-03682a65498f",
                "IsHidden": true,
                "Category": "primary",
                "ObjectiveType": "custom",
                "ForceShowOnLoadingScreen": true,
                "DisplayAsKillObjective": false,
                "Image": "images/unlockables/item_perspective_55d34557-5b46-422f-84ce-7bb13cfcef96_0.jpg",
                "BriefingName": "$loc UI_CONTRACT_LUMUMBA_OBJ_2_TITLE",
                "BriefingText": "$loc UI_LYNX_OBJ_DESC",
                "LongBriefingText": "$loc UI_LYNX_OBJ_DESC",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_LUMUMBA_OBJ_2_TITLE",
                    "iconType": 17
                },
                "Type": "statemachine",
                "Definition": {
                    "States": {
                        "Start": {
                            "ItemPickedUp": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "195dcd6b-6663-4768-9e0a-c94e244cbea5"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            }
        ]
    },
    "SMF": {
        "destinations": {
            "addToDestinations": true,
            "peacockIntegration": false,
            "narrativeContext": "flashback"
        }
    }
}

// Put your assassination challenges here...
const assassinationChallenges = [
    {
    "Id": "1d1b07b9-cb7f-4234-b960-ba31cfa9fce9",
    "Name": "UI_CHALLENGES_MIAMI_47_ASSASINATION_DROWN_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_drown.jpg",
    "Description": "UI_CHALLENGES_MIAMI_47_ASSASINATION_DROWN_DESC",
    "Rewards": {
        "MasteryXP": 1000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_TRAPPED_WOLVERINE",
    "ParentLocationId": "LOCATION_PARENT_TRAPPED",
    "Type": "location",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Scope": "session",
        "States": {
            "Start": {
                "Kill": {
                    "Condition": {
                        "$and": [
                            {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            {
                                "$eq": [
                                    "$Value.KillMethodStrict",
                                    "accident_drown"
                                ]
                            }
                        ]
                    },
                    "Transition": "Success"
                }
            }
        }
    },
    "Tags": ["story", "easy", "assassination"]
},
{
    "Id": "1d1b07b9-cb7f-4234-b960-ba31cfa9fce8",
    "Name": "UI_CHALLENGES_MIAMI_47_ASSASINATION_ACCIDENT_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_accident.jpg",
    "Description": "UI_CHALLENGES_MIAMI_47_ASSASINATION_ACCIDENT_DESC",
    "Rewards": {
        "MasteryXP": 1000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_TRAPPED_WOLVERINE",
    "ParentLocationId": "LOCATION_PARENT_TRAPPED",
    "Type": "location",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Scope": "session",
        "States": {
            "Start": {
                "Kill": {
                    "Condition": {
                        "$and": [
                            {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            {
                                "$eq": ["$Value.Accident", true]
                            }
                        ]
                    },
                    "Transition": "Success"
                }
            }
        }
    },
    "Tags": ["story", "easy", "assassination"]
},{
    "Id": "1d1b07b9-cb7f-4234-b960-ba31cfa9fce7",
    "Name": "UI_CHALLENGES_MIAMI_47_ASSASINATION_POISON_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_poison.jpg",
    "Description": "UI_CHALLENGES_MIAMI_47_ASSASINATION_POISON_DESC",
    "Rewards": {
        "MasteryXP": 1000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_TRAPPED_WOLVERINE",
    "ParentLocationId": "LOCATION_PARENT_TRAPPED",
    "Type": "location",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Scope": "session",
        "States": {
            "Start": {
                "Kill": {
                    "Condition": {
                        "$and": [
                            {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            {
                                "$eq": [
                                    "$Value.KillClass",
                                    "poison"
                                ]
                            }
                        ]
                    },
                    "Transition": "Success"
                }
            }
        }
    },
    "Tags": ["story", "easy", "assassination"]
},{
    "Id": "1d1b07b9-cb7f-4234-b960-ba31cfa9fce6",
    "Name": "UI_CHALLENGES_MIAMI_47_MASTER_ASSASSIN_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_versatile.jpg",
    "Description": "UI_CHALLENGES_MIAMI_47_MASTER_ASSASSIN_DESC",
    "Rewards": {
        "MasteryXP": 4000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_TRAPPED_WOLVERINE",
    "ParentLocationId": "LOCATION_PARENT_TRAPPED",
    "Type": "location",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Scope": "hit",
        "Constants": {
            "RequiredChallenges": [
                "1d1b07b9-cb7f-4234-b960-ba31cfa9fce9",
                "1d1b07b9-cb7f-4234-b960-ba31cfa9fce8",
                "1d1b07b9-cb7f-4234-b960-ba31cfa9fce7",
                "1d1b07b9-cb7f-4234-b960-ba31cfa9fce5",
                "97b0f181-d018-4fe4-8fb2-8b1737ece7b9"
            ]
        },
        "Context": {
            "CompletedChallenges": []
        },
        "ContextListeners": {
            "CompletedChallenges": {
                "comparand": "$.RequiredChallenges",
                "type": "challengetree"
            }
        },
        "States": {
            "Start": {
                "ChallengeCompleted": [
                    {
                        "$pushunique": [
                            "CompletedChallenges",
                            "$Value.ChallengeId"
                        ]
                    },
                    {
                        "Condition": {
                            "$all": {
                                "?": {
                                    "$any": {
                                        "?": {
                                            "$eq": [
                                                "$.#",
                                                "$.##"
                                            ]
                                        },
                                        "in": "$.CompletedChallenges"
                                    }
                                },
                                "in": "$.RequiredChallenges"
                            }
                        },
                        "Transition": "Success"
                    }
                ]
            }
        }
    },
    "Tags": ["story", "hard", "assassination"]
}, {
    "Id": "1d1b07b9-cb7f-4234-b960-ba31cfa9fce5",
    "Name": "UI_CHALLENGES_MIAMI_47_ASSASINATION_FIBER_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_fiberwire.jpg",
    "Description": "UI_CHALLENGES_MIAMI_47_ASSASINATION_FIBER_DESC",
    "Rewards": {
        "MasteryXP": 1000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_TRAPPED_WOLVERINE",
    "ParentLocationId": "LOCATION_PARENT_TRAPPED",
    "Type": "location",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Scope": "session",
        "States": {
            "Start": {
                "Kill": {
                    "Condition": {
                        "$and": [
                            {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            {
                                "$eq": [
                                    "$Value.KillItemCategory",
                                    "fiberwire"
                                ]
                            }
                        ]
                    },
                    "Transition": "Success"
                }
            }
        }
    },
    "Tags": ["story", "easy", "assassination"]
}]

// Put your classic challenges here...
const classicChallenges = [
    {
            "Id": "92643706-6f98-4b1c-9700-ee4819aaadc4",
            "Name": "UI_CHALLENGES_WOLVERINE_SILENT_ASSASSIN_NAME",
            "ImageName": "images/challenges/profile_challenges/classics_normal_47_silent_assassin.jpg",
            "Description": "UI_CHALLENGES_GENERAL_SILENT_ASSASSIN_DESC",
            "Rewards": {
                "MasteryXP": 3000
            },
            "Drops": [],
            "IsPlayable": true,
            "IsLocked": false,
            "HideProgression": false,
            "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
            "Icon": "profile",
            "LocationId": "LOCATION_TRAPPED_WOLVERINE",
            "ParentLocationId": "LOCATION_PARENT_TRAPPED",
            "Type": "contract",
            "DifficultyLevels": [],
            "OrderIndex": 10000,
            "XpModifier": {},
            "RuntimeType": "Hit",
            "Definition": {
                "Context": {
                    "Witnesses": [],
                    "KilledTargets": [],
                    "RecordingDestroyed": true,
                    "LastAccidentTime": 0
                },
                "Scope": "session",
                "States": {
                    "Start": {
                        "ContractEnd": {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            true,
                                            "$.RecordingDestroyed"
                                        ]
                                    },
                                    {
                                        "$all": {
                                            "in": "$.Witnesses",
                                            "?": {
                                                "$any": {
                                                    "in": "$.KilledTargets",
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    }
                                                }
                                            }
                                        }
                                    }
                                ]
                            },
                            "Transition": "Success"
                        },
                        "AccidentBodyFound": {
                            "$set": ["LastAccidentTime", "$Timestamp"]
                        },
                        "Witnesses": {
                            "Condition": {
                                "$any": {
                                    "in": "$Value",
                                    "?": {
                                        "$pushunique": [
                                            "Witnesses",
                                            "$.#"
                                        ]
                                    }
                                }
                            }
                        },
                        "Spotted": {
                            "Condition": {
                                "$any": {
                                    "in": "$Value",
                                    "?": {
                                        "$pushunique": [
                                            "Witnesses",
                                            "$.#"
                                        ]
                                    }
                                }
                            }
                        },
                        "Kill": [
                            {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsTarget",
                                                false
                                            ]
                                        },
                                        {
                                            "$not": {
                                                "$eq": [
                                                    "$Value.KillContext",
                                                    1
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "Transition": "Failure"
                            },
                            {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsTarget",
                                                false
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.KillContext",
                                                1
                                            ]
                                        }
                                    ]
                                },
                                "Actions": {
                                    "$pushunique": [
                                        "KilledTargets",
                                        "$Value.RepositoryId"
                                    ]
                                }
                            },
                            {
                                "Condition": {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                "Actions": {
                                    "$pushunique": [
                                        "KilledTargets",
                                        "$Value.RepositoryId"
                                    ]
                                }
                            }
                        ],
                        "CrowdNPC_Died": {
                            "Transition": "Failure"
                        },
                        "MurderedBodySeen": [
                            {
                                "Condition": {
                                    "$eq": [
                                        "$Value.IsWitnessTarget",
                                        true
                                    ]
                                },
                                "Actions": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$Value.Witness"
                                    ]
                                }
                            },
                            {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                false
                                            ]
                                        },
                                        {
                                            "$not": {
                                                "$eq": [
                                                    "$.LastAccidentTime",
                                                    "$Timestamp"
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "Transition": "Failure"
                            }
                        ],
                        "SecuritySystemRecorder": [
                            {
                                "Actions": {
                                    "$set": [
                                        "RecordingDestroyed",
                                        false
                                    ]
                                },
                                "Condition": {
                                    "$eq": ["$Value.event", "spotted"]
                                }
                            },
                            {
                                "Actions": {
                                    "$set": ["RecordingDestroyed", true]
                                },
                                "Condition": {
                                    "$or": [
                                        {
                                            "$eq": [
                                                "$Value.event",
                                                "erased"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.event",
                                                "destroyed"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            },
            "Tags": ["story", "hard", "classic"],
            "InclusionData": {
                "ContractIds": ["a3e19d55-64a6-4282-bb3c-d18c3f3e6e28"]
            }
        },
        {
            "Id": "92643706-6f98-4b1c-9700-ee4819aaadc3",
            "Name": "UI_CHALLENGES_WOLVERINE_SUIT_ONLY_NAME",
            "ImageName": "images/challenges/profile_challenges/classics_normal_47_suit_only.jpg",
            "Description": "UI_CHALLENGES_GENERAL_SUIT_ONLY_DESC",
            "Rewards": {
                "MasteryXP": 2000
            },
            "Drops": [],
            "IsPlayable": true,
            "IsLocked": false,
            "HideProgression": false,
            "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
            "Icon": "profile",
            "LocationId": "LOCATION_TRAPPED_WOLVERINE",
            "ParentLocationId": "LOCATION_PARENT_TRAPPED",
            "Type": "contract",
            "DifficultyLevels": [],
            "OrderIndex": 10000,
            "XpModifier": {},
            "RuntimeType": "Hit",
            "Definition": {
                "Scope": "session",
                "Context": {},
                "States": {
                    "Start": {
                        "ContractStart": [
                            {
                                "Condition": {
                                    "$eq": [
                                        "$Value.IsHitmanSuit",
                                        false
                                    ]
                                },
                                "Transition": "Failure"
                            }
                        ],
                        "Disguise": {
                            "Transition": "Failure"
                        },
                        "ContractEnd": {
                            "Transition": "Success"
                        }
                    }
                }
            },
            "Tags": ["story", "hard", "classic"],
            "InclusionData": {
                "ContractIds": ["a3e19d55-64a6-4282-bb3c-d18c3f3e6e28"]
            }
        },
        {
            "Id": "92643706-6f98-4b1c-9700-ee4819aaadc2",
            "Name": "UI_CHALLENGES_WOLVERINE_SILENT_ASSASSIN_SUIT_NAME",
            "ImageName": "images/challenges/profile_challenges/classics_normal_47_sa_suit.jpg",
            "Description": "UI_CHALLENGES_GENERAL_SILENT_ASSASSIN_SUIT_DESC",
            "Rewards": {
                "MasteryXP": 4000
            },
            "Drops": [],
            "IsPlayable": true,
            "IsLocked": false,
            "HideProgression": false,
            "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
            "Icon": "profile",
            "LocationId": "LOCATION_TRAPPED_WOLVERINE",
            "ParentLocationId": "LOCATION_PARENT_TRAPPED",
            "Type": "contract",
            "DifficultyLevels": [],
            "OrderIndex": 10000,
            "XpModifier": {},
            "RuntimeType": "Hit",
            "Definition": {
                "Context": {
                    "Witnesses": [],
                    "Targets": [],
                    "RecordingDestroyed": true,
                    "LastAccidentTime": 0
                },
                "Scope": "session",
                "States": {
                    "Start": {
                        "ContractEnd": {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            true,
                                            "$.RecordingDestroyed"
                                        ]
                                    },
                                    {
                                        "$all": {
                                            "in": "$.Witnesses",
                                            "?": {
                                                "$any": {
                                                    "in": "$.Targets",
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$.##"
                                                        ]
                                                    }
                                                }
                                            }
                                        }
                                    }
                                ]
                            },
                            "Transition": "Success"
                        },
                        "AccidentBodyFound": {
                            "$set": ["LastAccidentTime", "$Timestamp"]
                        },
                        "Witnesses": {
                            "Condition": {
                                "$any": {
                                    "in": "$Value",
                                    "?": {
                                        "$pushunique": [
                                            "Witnesses",
                                            "$.#"
                                        ]
                                    }
                                }
                            }
                        },
                        "Spotted": {
                            "Condition": {
                                "$any": {
                                    "in": "$Value",
                                    "?": {
                                        "$pushunique": [
                                            "Witnesses",
                                            "$.#"
                                        ]
                                    }
                                }
                            }
                        },
                        "ContractStart": [
                            {
                                "Condition": {
                                    "$eq": [
                                        "$Value.IsHitmanSuit",
                                        false
                                    ]
                                },
                                "Transition": "Failure"
                            }
                        ],
                        "Kill": [
                            {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsTarget",
                                                false
                                            ]
                                        },
                                        {
                                            "$not": {
                                                "$eq": [
                                                    "$Value.KillContext",
                                                    1
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "Transition": "Failure"
                            },
                            {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsTarget",
                                                false
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.KillContext",
                                                1
                                            ]
                                        }
                                    ]
                                },
                                "Actions": {
                                    "$pushunique": [
                                        "Targets",
                                        "$Value.RepositoryId"
                                    ]
                                }
                            },
                            {
                                "Condition": {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                "Actions": {
                                    "$pushunique": [
                                        "Targets",
                                        "$Value.RepositoryId"
                                    ]
                                }
                            }
                        ],
                        "CrowdNPC_Died": {
                            "Transition": "Failure"
                        },
                        "MurderedBodySeen": [
                            {
                                "Condition": {
                                    "$eq": [
                                        "$Value.IsWitnessTarget",
                                        true
                                    ]
                                },
                                "Actions": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$Value.Witness"
                                    ]
                                }
                            },
                            {
                                "Condition": {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                false
                                            ]
                                        },
                                        {
                                            "$not": {
                                                "$eq": [
                                                    "$.LastAccidentTime",
                                                    "$Timestamp"
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "Transition": "Failure"
                            }
                        ],
                        "SecuritySystemRecorder": [
                            {
                                "Actions": {
                                    "$set": [
                                        "RecordingDestroyed",
                                        false
                                    ]
                                },
                                "Condition": {
                                    "$eq": ["$Value.event", "spotted"]
                                }
                            },
                            {
                                "Actions": {
                                    "$set": ["RecordingDestroyed", true]
                                },
                                "Condition": {
                                    "$or": [
                                        {
                                            "$eq": [
                                                "$Value.event",
                                                "erased"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.event",
                                                "destroyed"
                                            ]
                                        }
                                    ]
                                }
                            }
                        ],
                        "Disguise": {
                            "Transition": "Failure"
                        }
                    }
                }
            },
            "Tags": ["story", "hard", "suitonly", "classic"],
            "InclusionData": {
                "ContractIds": ["a3e19d55-64a6-4282-bb3c-d18c3f3e6e28"]
            }
        }
    ]

module.exports = function PassengerTrainPlugin(controller) {
    if (!controller.smf.modIsInstalled("KevinRudd.PassengerTrain")) {
        log(LogLevel.ERROR, "[Passenger Train] Mod currently not deployed, please deploy it in SMF")
        return
    }

    contract.Metadata.ScenePath = "assembly:/_pro/scenes/missions/trapped/scene_lynx_peacock.entity"
    controller.addMission(contract)
    controller.missionsInLocations["LOCATION_TRAPPED_WOLVERINE"].push(contract.Metadata.Id)

    controller.masteryService.registerMasteryData({
        "LocationId": "LOCATION_PARENT_TRAPPED",
        "GameVersions": ["h3"],
        "MaxLevel": 5,
        "Drops": [
            {
                "Id": "STARTING_LOCATION_TRAPPED_WOLVERINE_TRAIN_LAB",
                "Level": 2
            },
            {
                "Id": "FIREARMS_HERO_PISTOL_SILENCED_HOMEMADE",
                "Level": 2
            },
            {
                "Id": "AGENCYPICKUP_TRAPPED_LYNX_MAINTENANCE",
                "Level": 2
            },
            {
                "Id": "STARTING_LOCATION_TRAPPED_WOLVERINE_TRAIN_FLATBED",
                "Level": 3
            },
            {
                "Id": "STARTING_LOCATION_TRAPPED_LYNX_BAR",
                "Level": 3
            },
            {
                "Id": "PROP_DEVICE_ICA_SEMTEX_PROXIMITY_EXPLOSIVE_S3",
                "Level": 4
            },
            {
                "Id": "AGENCYPICKUP_TRAPPED_LYNX_LAUNDRY",
                "Level": 4
            },
            {
                "Id": "FIREARMS_HERO_SHOTGUN_SILENCED_WOLVERINE",
                "Level": 5
            },
            {
                "Id": "STARTING_LOCATION_TRAPPED_LYNX_OFFICE",
                "Level": 5
            }
        ]
    })

    controller.configManager.configs.Entrances["assembly:/_pro/scenes/missions/trapped/scene_lynx_peacock.entity"] = [
        "af29c8d3-45cd-4b36-b7ed-5acc9398556a",
        "ee4b0060-b322-4bb0-99b5-942e8a20f277",
        "f21b1a1a-bec9-4a06-9a4a-d615e9721e3b"
    ]

    controller.configManager.configs.AgencyPickups["assembly:/_pro/scenes/missions/trapped/scene_lynx_peacock.entity"] = [
        "d4b6f7eb-6c48-4605-95de-7f9695be2ed0",
        "1a7f20ee-909a-4fa5-bba0-b8068ac05240"
    ]

        controller.challengeService.registerGroup(assassinationChallenges, "LOCATION_PARENT_TRAPPED", "h3")
        controller.challengeService.registerGroup(classicChallenges, "LOCATION_PARENT_TRAPPED", "h3")
    
        /**
         * For assassinations
         */
        for (const challenge of assassinationChallenges) {
            controller.challengeService.registerChallenge(
                challenge,
                "assassination",
                challenge.ParentLocationId,
                "h3"
            )
        }

        /**
         * For classics
         */
        for (const challenge of classicChallenges) {
            controller.challengeService.registerChallenge(
                challenge,
                "classic",
                challenge.ParentLocationId,
                "h3"
            )
        }

    log(LogLevel.INFO, "[Passenger Train] Mission available in Romania destination screen")
}
