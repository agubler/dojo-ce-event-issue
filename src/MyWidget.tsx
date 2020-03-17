import { create, tsx } from '@dojo/framework/core/vdom'

interface MyWidgetProperties {
    onClose: () => void;
}

const factory = create().properties<MyWidgetProperties>();

export default factory(function MyWidget({properties}) {
    return (
        <div onclick={() => {
            properties().onClose();
        }} />
    );
});