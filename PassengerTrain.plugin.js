const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

    

module.exports = function PassengerTrainPlugin(controller) {
    if (!controller.smf.modIsInstalled("KevinRudd.PassengerTrain")) {
        log(LogLevel.ERROR, "[Passenger Train] Mod currently not deployed, please deploy it in SMF")
        return
    }


    controller.configManager.configs.Entrances["assembly:/_pro/scenes/missions/trapped/scene_lynx.entity"] = [
        "af29c8d3-45cd-4b36-b7ed-5acc9398556a",
        "ee4b0060-b322-4bb0-99b5-942e8a20f277",
        "f21b1a1a-bec9-4a06-9a4a-d615e9721e3b"
    ]
	controller.configManager.configs.AgencyPickups["assembly:/_pro/scenes/missions/trapped/scene_lynx.entity"] = [
        "d4b6f7eb-6c48-4605-95de-7f9695be2ed0",
        "1a7f20ee-909a-4fa5-bba0-b8068ac05240"

    ]

    log(LogLevel.INFO, "[Passenger Train] Mission available in Romania destination screen")
}

