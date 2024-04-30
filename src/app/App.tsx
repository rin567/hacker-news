// import { useState, useEffect, ReactNode } from 'react';
// import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router'
import { SplitCol, SplitLayout, View } from '@vkontakte/vkui'

import { Home, News } from '../pages'
import { DEFAULT_VIEW_PANELS } from './routes'

export const App = () => {
	const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME_PAGE } =
		useActiveVkuiLocation()
	// const [fetchedUser, setUser] = useState<UserInfo | undefined>();
	// const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size="large" />);

	// useEffect(() => {
	//   async function fetchData() {
	//     const user = await bridge.send('VKWebAppGetUserInfo');
	//     setUser(user);
	//     setPopout(null);
	//   }
	//   fetchData();
	// }, []);

	return (
		<SplitLayout>
			<SplitCol>
				<View activePanel={activePanel}>
					<Home id='home_page' />
					<News id='news_page' />
				</View>
			</SplitCol>
		</SplitLayout>
	)
}
