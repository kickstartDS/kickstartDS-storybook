import { Headline } from "@kickstartds/base/lib/headline";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

export const Cta = ({headline, storytelling}) => (
    <div className="cta">
        <Headline
            {...headline}
        />
        <Storytelling
            {...storytelling}
        />
    </div>
)