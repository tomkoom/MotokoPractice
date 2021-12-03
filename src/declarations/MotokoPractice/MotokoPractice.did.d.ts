import type { Principal } from '@dfinity/principal';
export interface WhoAmI {
  'argument' : () => Promise<Principal>,
  'id' : () => Promise<Principal>,
  'idQuick' : () => Promise<Principal>,
  'installer' : () => Promise<Principal>,
  'whoami' : () => Promise<Principal>,
}
export interface _SERVICE extends WhoAmI {}
