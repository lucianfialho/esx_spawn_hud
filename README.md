# esx_spawn_hud
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=JP7ZWZG5D4U2E&currency_code=BRL)

## For more informations or doubt ...
[![Discord](https://discordapp.com/api/guilds/775510557825695804/widget.png?style=banner2)](https://discord.gg/Q2gRNUmMqQ)

ESX  Spawn Hud  is an plugin for ESX to player select where spawn:

## Requirements

* NodeJs
    - [node-js](https://nodejs.org/en/) >= 8.x
* VueCli
    - [vue-cli](https://cli.vuejs.org/) 3.x.

## Download & Installation

### Using Git
```bash
    cd resources
    git clone https://github.com/lucianfialhobp/esx_spawn_hud [esx]/esx_spawn_hud
```

### Installation
- Open html folder `cd \[esx\]/esx_spawn_hud`
- Install all dependencies `npm install`
- Build interface `npm run build`
- Add this in your `server.cfg`:


```
    ensure esx_spawn_hud
```

## Configuration
All settings is in `config.lua`

- Config spawn locals

``` lua
-- Example spawn coords
config.Coords.vinewood  = { 
    ['x'] = 294.50, 
    ['y'] = 178.42,
    ['z'] = 104.24,
    ['heading'] = 50.2,
    ['label'] = 'Vinewood',
    ['icon'] = 'star' -- You can get icons in https://fontawesome.com/
}
```

You can buy me a coffee and encourage me to share more codes with the community :)  
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=JP7ZWZG5D4U2E&currency_code=BRL)

# Legal
### License
esx_spawn_hud - Spawn Hud for players

Copyright (C) 2020-2020 Lucian Fialho

This program Is free software: you can redistribute it And/Or modify it under the terms Of the GNU General Public License As published by the Free Software Foundation, either version 3 Of the License, Or (at your option) any later version.

This program Is distributed In the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty Of MERCHANTABILITY Or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License For more details.

You should have received a copy Of the GNU General Public License along with this program. If Not, see http://www.gnu.org/licenses/.
