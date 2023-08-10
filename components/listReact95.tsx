import { List } from '@react95/core'

export const ListReact95 = () => (
  <>
    <List>
      <List.Item>
        <List>
          <List.Item /* icon={<FolderExe variant="16x16_4" />} */>
            Accessories
          </List.Item>
          <List.Item /* icon={<FolderExe variant="16x16_4" />} */>
            StartUp
          </List.Item>
          <List.Item /* icon={<MicrosoftExchange variant="16x16_4" />} */>
            Microsoft Exchange
          </List.Item>
          <List.Item /* icon={<MsDos variant="16x16_32" />} */>
            MS-DOS Prompt
          </List.Item>
          <List.Item /* icon={<MicrosoftNetwork variant="16x16_4" />} */>
            The Microsoft Network
          </List.Item>
          <List.Item /* icon={<WindowsExplorer variant="16x16_4" />} */>
            Windows Explorer
          </List.Item>
        </List>
        Programs
      </List.Item>
      <List.Item /* icon={<FolderFile variant="32x32_4" />} */>
        Documents
      </List.Item>
      <List.Item /* icon={<Settings variant="32x32_4" />} */>
        <List>
          <List.Item /* icon={<FolderSettings variant="16x16_4" />} */>
            Control Panel
          </List.Item>
          <List.Item /* icon={<FolderPrint variant="16x16_4" />} */>
            Printers
          </List.Item>
        </List>
        Settings
      </List.Item>
      <List.Item /* icon={<FileFind variant="32x32_4" />} */>Find</List.Item>
      <List.Item /* icon={<HelpBook variant="32x32_4" />} */>Help</List.Item>
      <List.Item /* icon={<LoaderBat variant="32x32_4" />} */>Run...</List.Item>
      <List.Divider />
      <List.Item /* icon={<Computer3 variant="32x32_4" />} */>
        Shut Down...
      </List.Item>
    </List>
  </>
)
