'use client'

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/dialog'
import FormFieldsUser from './form-fields-user'
import { userType } from '@/types/user'

interface DialogInformationUserProps {
  user?: userType
  children: React.ReactNode
  isInformation?: boolean
}

export function DialogInformationUser({
  user,
  children,
}: DialogInformationUserProps) {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2" asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Informações do usuário</DialogTitle>
          <DialogDescription>
            Visualize as informações detalhadas do usuário abaixo.
          </DialogDescription>
        </DialogHeader>
        <FormFieldsUser user={user} readOnly />
      </DialogContent>
    </Dialog>
  )
}
