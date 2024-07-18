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
                "Id": "STARTING_LOCATION_TRAPPED_LYNX_OFFICE_DISGUISED",
                "Level": 5
            }
        ]
    })

    controller.configManager.configs.Entrances["assembly:/_pro/scenes/missions/trapped/scene_lynx_peacock.entity"] = [
        "af29c8d3-45cd-4b36-b7ed-5acc9398556a",
        "ee4b0060-b322-4bb0-99b5-942e8a20f277",
        "c84a3973-4c6a-47bd-a280-8710850bae4f"
    ]

    controller.configManager.configs.AgencyPickups["assembly:/_pro/scenes/missions/trapped/scene_lynx_peacock.entity"] = [
        "d4b6f7eb-6c48-4605-95de-7f9695be2ed0",
        "1a7f20ee-909a-4fa5-bba0-b8068ac05240"
    ]

    log(LogLevel.INFO, "[Passenger Train] Mission available in Romania destination screen")
}

