import { choose, fetchFileContents } from "choose-for-me";

export function getTagline(): string {
    const day = getHumorousDayName()
    const taglines: string[] = [
        `Happy ${day}!`, `Wow, as if it's already ${day}`,
        `Hooray for ${day}!`, `What are we eating on this fine ${day}?`,
        `The Rat Dog better not have brought lunch on this historic ${day}...`,
        `>python food.py -w`,
        `Are the towels on the Titanic wet?`,
        `NAAUUURGGHHH!`,
        `better that the original`,
        `AMP CHAFF!`,
        `instead of having dessert, just have more main`,
        `tony said he'd drive`,
        `Drinking game: take a shot every time Matt runs into someone he knows`,
        `If Matt's upstairs, we're not waiting for him`,
        `And to wash this down, how about a nice ALC?`,
        `Chris Mathie`,
        `Tim Allen`,
        `Conduit pods`,
        `Bitbucket proxy is down again, brad run the macro`,
        `I won't be mad, just give me my jacket back!`,
        `Why would someone STEAL a jacket?!`,
        `s**t is the opposite of taste`,
        `mum said its my turn to go on a costco run with rhys`,
        `keep in touch with yourself`,
        `s**t pie`,
        `haydens social club IOU is larger than Einstein's IQ`
    ]
    const randomIndex = Math.floor(Math.random() * taglines.length);
    if (day == 'Hope you\'re not working today...') {
        return day;
    } else {
        return taglines[randomIndex];
    }
}

export function getHumorousDayName(): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    const dayName = date.toLocaleDateString(undefined, options);
    switch (dayName) {
        case 'Monday':
            return 'Munchday';
        case 'Tuesday':
            return 'Tunchday';
        case 'Wednesday':
            return 'Catalina day';
        case 'Thursday':
            return 'Thunchday';
        case 'Friday':
            return "Fryday";
        default:
            return 'Hope you\'re not working today...';
    }
}

export async function getDecision(): Promise<Map<string, string>> {
    let res: Map<string, string> = new Map<string, string>();
    let choices: string = await fetchFileContents(process.env.REACT_APP_CHOICES_URL!);
    const wooliesChoices: string = await fetchFileContents(process.env.REACT_APP_CHOICES_WOOLIES_URL!);
    choices = choices + '\n' + wooliesChoices
    if (getHumorousDayName() == 'Catalina day') {
        res.set('standard', 'Catalina (let me eat ya)');
    } else {
        res.set('standard', choose(choices, '\n'));
        if (!wooliesChoices.includes(res.get('standard')!)) {
            res.set('woolies', choose(wooliesChoices, '\n'));
        }
    }
    return res;
}