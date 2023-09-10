interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Gallery Owner'],
  customerRoles: [],
  tenantRoles: ['Artist'],
  tenantName: 'Gallery',
  applicationName: 'Art Deco ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Register and login to the application',
    'Invite Artists to join the application',
    'Manage Art Deco motifs in the Gallery',
    'Customize color palettes for the Art Deco motifs',
    'Save and retrieve different versions of wall designs',
  ],
};
