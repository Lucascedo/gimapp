
import React from 'react';

type IconName = 'UserGroup' | 'AcademicCap' | 'Identification' | 'WrenchScrewdriver' | 'Squares2X2' | 'DocumentChartBar' | 'ClipboardDocumentList' | 'CalendarDays' | 'PlusCircle' | 'UserPlus' | 'Bars3' | 'XMark';

interface IconProps {
    name: IconName;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = "w-6 h-6" }) => {
    const icons: { [key in IconName]: JSX.Element } = {
        UserGroup: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 00-9 0m9 0a9.094 9.094 0 01-9 0m9 0v.34c0 .587-.473 1.06-1.06 1.06H6.06c-.587 0-1.06-.473-1.06-1.06v-.34m12 0a9.094 9.094 0 00-9 0" />,
        AcademicCap: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.072-2.072a50.57 50.57 0 00-2.658.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84-50.57 50.57 0 00-2.658-.814l-2.072 2.072m-15.482 0A49.98 49.98 0 005.032 5.75c1.01.625 2.27 1.033 3.555 1.162a49.98 49.98 0 001.996-1.31c.645.241 1.28.523 1.905.822a49.98 49.98 0 001.996 1.31c1.285-.129 2.545-.537 3.555-1.162a49.98 49.98 0 001.905-.822c.625.299 1.26.58 1.905.822a49.98 49.98 0 001.996-1.31 49.98 49.98 0 003.555 1.162A49.98 49.98 0 0018.968 5.75c.625-.299 1.26-.58 1.905-.822a49.98 49.98 0 001.996-1.31" />,
        Identification: <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z" />,
        WrenchScrewdriver: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.664 1.208-.766M11.42 15.17l-4.66-4.66c-.384-.317-.664-.74-.766-1.208M11.42 15.17l-6.57 6.57a2.652 2.652 0 003.75 3.75l6.57-6.57M4.83 4.83L6 6m11.25 11.25l1.17 1.17" />,
        Squares2X2: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />,
        DocumentChartBar: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
        ClipboardDocumentList: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5h1.5v.75h-1.5v-.75zM6.75 12h1.5v.75h-1.5v-.75zM6.75 15h1.5v.75h-1.5v-.75zM4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />,
        CalendarDays: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h18" />,
        PlusCircle: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
        UserPlus: <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />,
        Bars3: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />,
        XMark: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    };
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            {icons[name]}
        </svg>
    );
};

export default Icon;