#!/usr/bin/env -S deno run --allow-env=HOME --allow-read=Source/Options.yaml --importmap=Source/ImportMap.json


import { parse as parseYAML } from 'YAML'
import { parse as parseINI } from 'INI'
import * as Paths from './Paths.js'


const { clear , log } = console;


clear();

log('Hardening the Fiery Fox')


const options = parseYAML(await Deno.readTextFile(Paths.Options));

log(options);
