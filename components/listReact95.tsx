import { List } from '@react95/core'
import Image from 'next/image'

//THAT WORKS!!! So i can send other images or icons
const IconComponent = () => {
  return <Image src="/bempagobg.png" height={24} width={24} alt="Icon" />
}

export const ListReact95 = () => (
  <>
    <List>
      <List.Item>
        <List>
          <List.Item icon={<IconComponent />}>Accessories</List.Item>
          <List.Item icon={<IconComponent />}>StartUp</List.Item>
          <List.Item icon={<IconComponent />}>Microsoft Exchange</List.Item>
          <List.Item icon={<IconComponent />}>MS-DOS Prompt</List.Item>
          <List.Item icon={<IconComponent />}>The Microsoft Network</List.Item>
          <List.Item icon={<IconComponent />}>Windows Explorer</List.Item>
        </List>
        Programs
      </List.Item>
      <List.Item icon={<IconComponent />}>Documents</List.Item>
      <List.Item icon={<IconComponent />}>
        <List>
          <List.Item icon={<IconComponent />}>Control Panel</List.Item>
          <List.Item icon={'false'}>Printers</List.Item>
        </List>
        Settings
      </List.Item>
      <List.Item icon={<IconComponent />}>Find</List.Item>
      <List.Item icon={<IconComponent />}>Help</List.Item>
      <List.Item icon={<IconComponent />}>Run...</List.Item>
      <List.Divider />
      <List.Item icon={<IconComponent />}>Shut Down...</List.Item>
    </List>
  </>
)
