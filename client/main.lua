ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

local cam

AddEventHandler('esx:onPlayerSpawn', function()
    
    pos = GetEntityCoords(PlayerPedId())
    cam = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", pos.x, pos.y, pos.z + 200.0, 270.00, 0.00, 0.00, 80.00, 0, 0)
    
    SetCamActive(cam, true)
    
    RenderScriptCams(true, false, 1, true, true)
    
    FreezeEntityPosition(PlayerPedId(), true)
    
    SetEntityVisible(PlayerPedId(), false, false)
    
    SendNUIMessage({
        type = 'open',
        locals = config.Coords
    })
end)