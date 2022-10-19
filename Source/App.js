#!/usr/bin/env -S deno run --importmap=Source/ImportMap.json


import { parse as parseYAML } from 'YAML'
import { parse as parseINI } from 'INI'


const { clear , log } = console;


clear();

log('Hardening the Fiery Fox')
