import vkBridge from '@vkontakte/vk-bridge'
import { createRoot } from 'react-dom/client'
import { AppConfig } from './app/AppConfig.tsx'

vkBridge.send('VKWebAppInit')

createRoot(document.getElementById('root')!).render(<AppConfig />)

if (import.meta.env.MODE === 'development') {
	import('./app/eruda.ts')
}
