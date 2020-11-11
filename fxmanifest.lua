fx_version 'bodacious'
games { 'rdr3', 'gta5' }

author 'Lucian Fialho'
description 'This is a spawn interface for esx'
version '1.0.0'

client_scripts {
    'config.lua',
    'client/main.lua'
}

ui_page 'spawn_hud/dist/index.html'

files {
	'spawn_hud/dist/index.html',
}

dependency 'es_extended'