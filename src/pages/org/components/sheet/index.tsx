import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { _LEAD } from "@/types"
import { Eye } from "lucide-react"

const LeadSheet = ({ lead }: { lead: _LEAD }) => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Eye className='h-6 w-6 cursor-pointer' />
                </SheetTrigger>
                <SheetContent className="h-full overflow-y-auto p-4">
                    <SheetHeader>
                        <SheetTitle>Lead</SheetTitle>
                    </SheetHeader>
                    <div>
                        <p className="mt-3 mb-3">{lead.content.message}</p>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <strong>Rating:</strong> {lead.rating}
                            </li>
                            <li>
                                <strong>Shortlisted:</strong> {lead.is_shortlisted ? 'Yes' : 'No'}
                            </li>
                            <li>
                                <strong>Contacted:</strong> {lead.is_contacted ? 'Yes' : 'No'}
                            </li>
                            <li>
                                <strong>Feedback:</strong> {lead.feedback}
                            </li>
                            <li>
                                <strong>Reason:</strong> {lead.reason}
                            </li>
                            <li>
                                <strong>Created At:</strong> {lead.content.created_at}
                            </li>
                            <li>
                                <strong>Source:</strong> {lead.content.source}
                            </li>
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default LeadSheet