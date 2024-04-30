import { UserInfo } from '@vkontakte/vk-bridge'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import {
	Button,
	Div,
	Group,
	Header,
	NavIdProps,
	Panel,
	PanelHeader,
} from '@vkontakte/vkui'
import { FC } from 'react'

export interface HomeProps extends NavIdProps {
	fetchedUser?: UserInfo
}

export const Home: FC<HomeProps> = ({ id }) => {
	const routeNavigator = useRouteNavigator()

	return (
		<Panel id={id}>
			<PanelHeader>Hacker News</PanelHeader>

			<Group header={<Header mode='secondary'>Navigation Example</Header>}>
				<Div>
					<Button
						stretched
						size='l'
						mode='secondary'
						onClick={() => routeNavigator.push('news_page')}
					>
						Покажите Персика, пожалуйста!
					</Button>
				</Div>
			</Group>
		</Panel>
	)
}
