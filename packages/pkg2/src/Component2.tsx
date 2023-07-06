import {Component1} from 'pkg1'
import {Button, ThemeProvider} from '@nativewaves/nw-exp-foundation'

export const Component2 = () => {
    console.log('LOG Component2')
    return (
        <ThemeProvider>
            <div>
                <span>Component2</span>
                <Component1 />
                <Button />
            </div>
        </ThemeProvider>
    )
}