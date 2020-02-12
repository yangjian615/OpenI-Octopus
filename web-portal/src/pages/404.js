import Link from 'umi/link';
import { formatMessage } from 'umi/locale';
import Exception from '@/components/Exception';
import DocumentTitle from "react-document-title";

export default () => (
    <DocumentTitle title={formatMessage({id:'platformName'})}>
      <Exception
        type="404"
        linkElement={Link}
        desc={formatMessage({ id: 'app.exception.description.404' })}
        backText={formatMessage({ id: 'app.exception.back' })}
      />
    </DocumentTitle>
);
