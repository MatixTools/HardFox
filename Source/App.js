#!/usr/bin/env -S deno run --allow-env=HOME --allow-read=Source/Options.yaml,${HOME}/.mozilla/firefox/profiles.ini --importmap=Source/ImportMap.json


import { Background , AccentA , AccentB , Font } from './Colors.js'
import { bgRgb24 , rgb24 } from 'Color'
import loadProfiles from './Profiles.js'
import * as Paths from './Paths.js'
import { parse } from 'YAML'


const { clear , log } = console;


clear();

log('Hardening the Fiery Fox')


const options = parse(await Deno.readTextFile(Paths.Options));

log(options);


const profiles = await loadProfiles();

log('Profiles',profiles);
